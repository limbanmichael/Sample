var qrcode = new QRCode("qrcode");
            var qrImgPath;
            var el2 = document.getElementById('dl');

            function makeCode () {		
                var elText = document.getElementById("text");
                
                if (!elText.value) {
                    // alert("Input a text");
                    elText.focus();
                    return;
                }
                
                qrcode.makeCode(elText.value);
                console.log(qrcode);
                qrImgPath = $('#qrcode > img').attr('src');

                // console.log(qrImgPath,' jjjjjj')
                // var el = document.getElementById('dl');
                // el.href = qrImgPath;
                // console.log(el.href, '>>>>>>');
            }

            makeCode();
            waitForFile();

            $("#text").
                on("blur", function () {
                    makeCode();
                    waitForFile();
                }).
                on("keydown", function (e) {
                    if (e.keyCode == 13) {
                        makeCode();
                        waitForFile()

                    }
            });



            function waitForFile(){
                setTimeout(() => {
                    let qelem = document.querySelector('#qrcode img')
                    let dlink = document.querySelector('#qrdl')
                    let qr = qelem.getAttribute('src');
                    dlink.setAttribute('href', qr);
                    dlink.setAttribute('download', 'filename');
                    dlink.removeAttribute('hidden');
                }, 500);
            }