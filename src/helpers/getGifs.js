export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Fa4JUvOPwW4I81cnCZF2yr58M5VFsVWr&q=${category}&limit=10`
  const resp = await fetch(url)
  const { data } = await resp.json()

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  return gifs
}
