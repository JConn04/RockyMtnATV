module.exports = {
    url: 'https://www.rockymountainatvmc.com/',
    elements: {
        Search: 'input[name="w"]',
        searchBtn: 'button[id="MagGlassBtn"]',
        Result: 'h1[id="heading"]',
        Result2: 'h1[id="heading"]',
        Result3: '#heading',
        Item: {
            selector: '(//span[@class="sli_title"])[contains(text(), "Akrapovic Racing Line Full System Exhaust (NO CA)")]',
            locateStrategy: 'xpath',
        },
        Login: '.acctLink[href="/Account"]',
        Username: {
            selector: '(//input[@type="email"])[1]',
            locateStrategy: 'xpath'
        },
        Password: 'input[type="password"]',
        loginBtn: 'button#loginBtn',
        Result4: {
            selector: '(//h2)[1]',
            locateStrategy: 'xpath',
        },
        addCartBtn: 'input[name="AddCartBtn"]',
        cartBtn: '.shoppingCartLink',
        addQuantity: '.icn-plus',
        minusQuantity: '.icn-minus',
        qtyField: '.qtyField',
        Remove: '.editBtn',
        cartEmpty: '.cartEmptyMsg',
        Popup: 'a[class="action continue gradeBgGold rndCnr4"]',
        machine: {
            selector: '//fieldset[@class="vehicleType"]  /span[1]',
            locateStrategy: 'xpath',
        },
        machineType: {
            selector: '(//a[@class="selectboxit-option-anchor"])[text()="SPORT BIKE"]',
            locateStrategy: 'xpath',
        },
        Year: {
            selector: '//fieldset[@class="vehicleYear"]  /span[1]',
            locateStrategy: 'xpath',
        },
        actualYear: {
            selector:'(//a[@class="selectboxit-option-anchor"])[text()="2011"]',
            locateStrategy: 'xpath',
        },
        Make: {
            selector: '//fieldset[@class="vehicleMake"]  /span[1]',
            locateStrategy: 'xpath',
        },
        actualMake: {
            selector: '(//a[@class="selectboxit-option-anchor"])[text()="KAWASAKI"]',
            locateStrategy: 'xpath',
        },
        Model: {
            selector: '//fieldset[@class="vehicleModel"]  /span[1]',
            locateStrategy: 'xpath',
        },
        actualModel: {
            selector: '(//a[@class="selectboxit-option-anchor"])[text()="Z1000"]',
            locateStrategy: 'xpath',
        },
        Result5: 'img[alt="Fits Your Machine"]',
        Item2: {
            selector: '//span[text()="Akrapovic Stainless Steel Headpipes (No CA)"]',
            locateStrategy: 'xpath'
        },
        Result6: {
            selector: 'h1',
            locateStrategy: 'xpath'
        },
        Result7: '.cartItemList',
        checkoutBtn: {
            selector: '(//a[@class="continueBtn continueBtnClr"])[2]',
            locateStrategy: 'xpath',
        },
        Result8: '.cartItemHeader',
        Result9: {
            selector: '(//h2)[1]',
            locateStrategy: 'xpath',
        },
        firstName: '#firstName',
        lastName: '#lastName',
        address1: '#address1',
        zipCode: '#zip',
        City: '#city',
        State: 'select[id="state"] option[value="WI"]',
        shippingBtn: 'button.continueBtn',
        useAnywayBtn: 'input[name="p::submit"]',
        paymentBtn: 'button[class="continueBtn continueBtnClr"]',
        cardNum: 'input[id="cardNum"]',
        cardMonth: 'option[value="03"]',
        // cardMonth: 'select[id="month"] option[value="03"]',
        cardYear: 'select[id="year"] option[value="2022"]',
        productQty: '#pd_qty',
        securityCode: '#cvc',
        email: 'input[type="email"]',
        phoneNumber: 'input[name="guestNotificationPanel:guestPhone"]',
        reviewOrderBtn: 'button[class="continueBtn continueBtnClr"]',
        errorMessage: '.icn-exclamation-circle'


    }
}