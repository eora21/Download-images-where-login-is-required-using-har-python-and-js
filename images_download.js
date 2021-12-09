async function downloadImage(imageSrcs) {
  const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay)) //이와 같이 선언 후
  imageSrcs.forEach(async (imageSrc, idx) => {
    
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
    
    const link = document.createElement('a')
    link.href = imageURL
    link.download = `${idx}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    await wait(2000)    // 이렇게 await와 함께 사용하면 동기적으로 동작한다.
  });
}