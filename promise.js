const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const dataBaru = []

const promiseOutput = (emosi) => {
  return new Promise((resolve, reject) => {
    if(emosi === undefined){
      console.log('Maaf Error!')
    }else{
      if(emosi === 'marah'){
        promiseTheaterIXX()
          .then(rawIIX => rawIIX.filter((i) => i.hasil === emosi))
          .then(hasilIXX => {
            promiseTheaterVGC()
              .then(rawVGC => rawVGC.filter((i) => i.hasil === emosi))
              .then(hasilAkhir => resolve(hasilAkhir.length + hasilIXX.length))
              .catch(error => error)    
          })
          .catch(error => error)
      }else if(emosi === 'tidak marah'){
        promiseTheaterIXX()
          .then(rawIIX => rawIIX.filter((i) => i.hasil === emosi))
          .then(hasilIXX => {
            promiseTheaterVGC()
              .then(rawVGC => rawVGC.filter((i) => i.hasil === emosi))
              .then(hasilAkhir => resolve(hasilAkhir.length + hasilIXX.length))
              .catch(error => error)    
          })
          .catch(error => error)
      }
    }
  })
}

module.exports = {
  promiseOutput,
};
