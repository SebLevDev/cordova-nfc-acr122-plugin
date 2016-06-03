# cordova-nfc-acr122-plugin

This is an experimental project to use an external NFC reader from Android.

It uses the [ACR122U NFC reader](http://www.acs.com.hk/en/products/3/acr122u-usb-nfc-reader) from [ACS](http://www.acs.com.hk/). The NFC reader is connected to the Android with a USB On-the-Go (OTG) cable.

This is a very rough proof of concept written for a client. The NFC functions are provided by the ascsmc-1.1.1.jar.

If you run the app without a reader attached, you'll get an ArrayIndexOutOfBoundsException exception.

this project is a refactoring of this source code https://github.com/don/nfc-acr122
