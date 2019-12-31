function a() {
    return new Promise(function(resolve) {
        var preloader = document.getElementById('loader');
        if( !preloader.classList.contains('done') )
        {
          preloader.classList.add('done');
        }
      }, 500)
    };

function b() {
        return new Promise(function(resolve) {
            setTimeout(function() {

                let paths = [
                  'M720 0H0V458V900H720V458V0ZM720 458L360 818L0 458L360 97.9999L720 458Z',
            
                  'M388.849 900H455.43C416.151 861.309 393.815 845.98 385.348 851.588C378.881 855.872 380.505 872.369 388.849 900ZM507.758 900C470.078 836.033 459.691 795.883 475.141 773.854C498.65 740.333 581.981 748.767 720 779.086V900H507.758ZM720 776.472C399.434 688.929 375.474 622.874 720 336.834V776.472ZM720 316.981C567.379 416.315 459.755 457.707 374.527 430.06C270.489 396.31 199.824 259.685 121.423 0L720 0V316.981ZM107.468 0C165.59 276.828 172.928 423.601 106.916 473.67C82.0695 492.516 46.832 497.661 2.30102e-10 490.884L2.29647e-10 0L107.468 0ZM0 563.16C35.9441 593.304 52.4977 618.993 49.5497 642.205C47.0523 661.871 30.5582 679.758 0 697.071L0 563.16ZM2.30102e-10 760.055C98.0293 765.3 129.054 806.763 103.845 900H2.29647e-10L2.30102e-10 760.055ZM271.339 900C285.854 878.143 299.994 867.495 314.466 867.022C330.145 866.51 346.213 877.941 363.573 900H271.339Z',
            
                  'M0 146.216V478.806C30.9927 450.174 51.248 419.455 61.0107 385.701C80.0728 319.795 59.1309 242.319 0 146.216ZM0 677.377C60.7393 690.21 107.059 713.531 140.324 749.071C174.646 785.74 195.07 835.416 203.095 900H0V677.377ZM348.395 900C402.071 779.238 458.061 669.443 520.636 563.539C579.958 463.141 645.2 366.239 720 266.805V900H348.395ZM720 70.225C611.262 129.804 511.468 159.106 411.8 158.68C280.963 158.12 150.344 106.331 0 4.55072V0H720V70.225Z',
            
                  'M360 0H0V450V900H360H720V450V0H360ZM360 0C558.823 0 720 201.472 720 450C720 698.528 558.823 900 360 900C161.177 900 0 698.528 0 450C0 201.472 161.177 0 360 0Z',
            
                  'M720 0H0V900H720V0ZM196.79 654.561C260.739 705.601 385.502 655.61 475.457 542.904C565.411 430.198 586.493 297.455 522.544 246.415C458.595 195.376 333.832 245.367 243.877 358.073C153.923 470.779 132.841 603.522 196.79 654.561Z',
            
                  'M720 0H0V900H720V0ZM223 35H40V851H223V35ZM268 35H451V851H268V35ZM679 35H496V851H679V35Z',
            
                  'M0 0H360C161.177 0 0 100.736 0 225V0ZM360 450C161.177 450 0 349.264 0 225V675V900H360H720V675V225V0H360C558.823 0 720 100.736 720 225C720 349.264 558.823 450 360 450ZM360 450C558.823 450 720 550.736 720 675C720 799.264 558.823 900 360 900C161.177 900 0 799.264 0 675C0 550.736 161.177 450 360 450Z'
                ]
            
                let words = [
                  'paque','ffers','ddity','nions','rigin','scars','lives','ctane','rgasm','xidic','bjects','utbox','ffice','ccult','rganic','ccupy','bvious','btain','ptimist','rator','il','rbit','range','melet','possum','ptical','ptions','ffice','rchid','uch','utlaw','zone','xygen','verview','verseas','verall','atmeal	','cean','dyssey','ffshore','pinion','kay','utfit','wn','mg','nion','utdoor','wl','atmeal','pen','ften','strich','ctopus'];
            
                let colors = [
                      '#FFF',
                      '#062B40',
                      '#398E27',
                      '#D0E9FF',
                      '#E2A2E3',
                      '#FFEC3E'
                ];    
            
                let root = document.documentElement;
            
                let a = Math.floor(Math.random() * words.length);
                let b = Math.floor(Math.random() * words.length);
            
                let c = Math.floor(Math.random() * paths.length);
                let d = Math.floor(Math.random() * paths.length);
            
                let e = Math.floor(Math.random() * paths.length);
                let f = Math.floor(Math.random() * paths.length);
            
                let g = Math.floor(Math.random() * colors.length);
                let h = Math.floor(Math.random() * colors.length);
            
                let k = Math.floor(Math.random() * colors.length);
                let l = Math.floor(Math.random() * colors.length);
            
                let wordOne = words[a];
                let wordTwo = words[b];
            
                let lineOne = document.querySelector('.word-1');
                let lineTwo = document.querySelector('.word-2');
            
                lineOne.innerHTML = wordOne;
                lineTwo.innerHTML = wordTwo;
            
                document.getElementById('r').setAttribute('d', paths[c]);
                document.getElementById('l').setAttribute('d', paths[d]);
                // document.getElementById('l2').setAttribute('d', paths[e]);
                // document.getElementById('r2').setAttribute('d', paths[f]);
            
                root.style.setProperty('--fill-left', colors[g]);
                root.style.setProperty('--fill-right', colors[h]);
                root.style.setProperty('--fill-left-b', colors[k]);
                root.style.setProperty('--fill-right-b', colors[l]);
                
                resolve();
                           
            }, 250);
        });
    }


a().then(b).then(function() {
    
})

