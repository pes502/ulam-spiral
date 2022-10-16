class UlamSpiral {
  precountPrimes(n) {
    let notPrimes = new Array(n);
    let primes = [];

    for (let i = 0; i < n; i++) {
      notPrimes[i] = false;
    }

    for (let i = 2; i < n; i++) {
      if (notPrimes[i] === false) {
        primes.push(i);
        for (let j = 2; i * j < n; j++) {
          notPrimes[i * j] = true;
        }
      }
    }
        
    return primes;
  }

  getData(cWidth, cHeight, cSpacing) {
    var spacing = parseInt(cSpacing);
    var cWidth = parseInt(cWidth);
    var cHeight = parseInt(cHeight);
    var px = 0;
    var py = 0;
    var direction = 0;
    var startStep = 1;
    var numbers = 1;
    var points = [];
    var spiral = [];
    var cSize = (cWidth >= cHeight) ? cSize = cWidth : cSize = cHeight;
    var precountedPrimes = this.precountPrimes(cWidth*cHeight);
    var precountedPrimesIndex = 0;
    var counter = 0;

    spiral.push({"x": cWidth/2+px, "y": cHeight/2+py}); // first spiral point

    while(cWidth/2+px < cSize) {
      for(var y = 0; y <= 1; y++) {
        for(var x = 0; x < startStep; x++) {
          counter++;
          switch(direction) {
            case 0: 
              if(precountedPrimes[precountedPrimesIndex] == counter) {
                points.push({"value": numbers, "x": cWidth/2+px, "y": cHeight/2+py});
                precountedPrimesIndex++;
              }
              px+=spacing;
              break;
            case 1: 
              if(precountedPrimes[precountedPrimesIndex] == counter) {
                points.push({"value": numbers, "x": cWidth/2+px, "y": cHeight/2+py});
                precountedPrimesIndex++;
              }
              py-=spacing; 
              break;
            case 2: 
              if(precountedPrimes[precountedPrimesIndex] == counter) {
                points.push({"value": numbers, "x": cWidth/2+px, "y": cHeight/2+py});
                precountedPrimesIndex++;
              }
              px-=spacing; 
              break;
            case 3: 
              if(precountedPrimes[precountedPrimesIndex] == counter) {
                points.push({"value": numbers, "x": cWidth/2+px, "y": cHeight/2+py});
                precountedPrimesIndex++;
              }
              py+=spacing; 
              break;
          }
          numbers++;
        }
        spiral.push({"x": cWidth/2+px, "y": cHeight/2+py});
        (direction == 3) ? direction = 0 : direction++;
      }
      startStep++;
    }
    return {"points": points, "spiral": spiral};
  }
}