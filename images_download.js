function downloadImage(imageSrcs) {
  imageSrcs.forEach((imageSrc, idx) => {
    setTimeout(function (){

      fetch(imageSrc)
      .then(res => res.blob())
      .then(imageBlog => {
        const imageURL = URL.createObjectURL(imageBlog)
        
        const link = document.createElement('a')
        link.href = imageURL
        link.download = `${idx + 1}.jpg`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      })
    }, idx * 500);
  });
}