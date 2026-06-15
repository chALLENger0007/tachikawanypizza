import { useEffect, useState } from 'react'
import { ref, onValue } from 'firebase/database'
import { db } from '../firebase.js'

/**
 * Fetches menu items from Realtime Database at the "menu" node.
 * Expected shape per item: { name, price, image, category }
 *
 * Returns:
 *  - items: flat array of menu items (with their db id)
 *  - loading: boolean
 *  - error: Error | null
 */
export default function useMenuItems() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const menuRef = ref(db, 'menu')

    const unsubscribe = onValue(
      menuRef,
      (snapshot) => {
        const data = snapshot.val()
        const list = data
          ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
          : []
        setItems(list)
        setLoading(false)
      },
      (err) => {
        setError(err)
        setLoading(false)
      }
    )

    return () => unsubscribe()
  }, [])

  return { items, loading, error }
}
