// используйте get запрос http://localhost:3000/api/revalidate?secret=12345 для проверки ревалидации
export default async function handler(req, res) {

  if (req.query.secret !== "12345") {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    await res.revalidate('/')
    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}