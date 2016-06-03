ACS Smart Card Android Library
Advanced Card Systems Ltd.



Introduction
------------

This library provides classes and interfaces for communicating with ACS smart
card readers.

To install the library to your development environment, see the section
"Installation".



Release Notes
-------------

Version: 1.1.3
Release Date: 31/3/2016

Supported Readers

VID  PID  Reader
---- ---- ---------------------------
072F B301 ACR32U-A1
072F B304 ACR3201-A1
072F 8300 ACR33U-A1
072F 8302 ACR33U-A2
072F 8307 ACR33U-A3
072F 8301 ACR33U
072F 9000 ACR38U
072F 90CF ACR38U-SAM
072F 90CC ACR38U-CCID/ACR100-CCID
072F 90D8 ACR3801
072F B100 ACR39U
072F B101 ACR39K
072F B102 ACR39T
072F B103 ACR39F
072F B104 ACR39U-SAM
072f B10C ACR39U-U1
072F B000 ACR3901U
072F 90D2 ACR83U-A1
072F 2011 ACR88U
072F 8900 ACR89U-A1
072F 8901 ACR89U-A2
072F 8902 ACR89U-A3
072F 1205 ACR100I
072F 1204 ACR101
072F 1206 ACR102
072F 2200 ACR122U/ACR122U-SAM/ACR122T
072F 2214 ACR1222U-C1
072F 1280 ACR1222U-C3
072F 2207 ACR1222U-C6
072F 222B ACR1222U-C8
072F 2206 ACR1222L-D1
072F 2225 ACR1222L
072F 222E ACR123U-A1
072F 2237 ACR123U
072F 2231 ACM123S1-Z1
072F 2203 ACR125
072F 221A ACR1251U-A1
072F 2229 ACR1251U-A2
072F 2218 ACR1251U-C (SAM)
072F 221B ACR1251U-C
072F 2232 ACR1251UK
072F 2242 ACR1251U-C1
072F 2238 ACR1251U-C9
072F 224F ACM1251U-Z2
072F 223B ACR1252U-A1
072F 223E ACR1252U-A2
072F 2244 ACR1252U-A1 (PICC)
072F 223F ACR1255U-J1
072F 2239 ACR1256U
072F 2211 ACR1261U-C1
072F 2100 ACR128U
072F 2224 ACR1281U-C1
072F 220F ACR1281U-C2 (qPBOC)
072F 2223 ACR1281U    (qPBOC)
072F 2208 ACR1281U-C3 (qPBOC)
072F 0901 ACR1281U-C4 (BSI)
072F 220A ACR1281U-C5 (BSI)
072F 2215 ACR1281U-C6
072F 2220 ACR1281U-C7
072F 2233 ACR1281U-K (PICC)
072F 2234 ACR1281U-K (PICC + ICC)
072F 2235 ACR1281U-K (PICC + ICC + SAM)
072F 2236 ACR1281U-K9 (PICC + ICC + 4SAM)
072F 2213 ACR1283L-D1
072F 222C ACR1283L-D2
072F 8201 APG8201-A1
072F 9006 CryptoMate
072F 90DB CryptoMate64
072F B200 CryptoMate T1
072F B106 CryptoMate T2

System Requirements

- Android 3.1 (Honeycomb) or above.

Development Environment

- ADT r23.0.2 or above.
- ADT Bundle is recommended. See Android Developers [1] for more information.

[1] http://developer.android.com/



Installation
------------

1. To try the demo project, select Import from File menu on Eclipse. Choose
   "ReaderTest" to import to your workspace.

2. You can also run the demo project without Eclipse installed. Copy
   "ReaderTest.apk" to your Android device. Launch the installation by clicking
   the file icon on any File Explorer application.

3. To use the class library to your project, copy "acssmc-x.y.z.jar" to the
   "libs" folder of your project.



History
-------

Library

v1.1.3 (31/3/2016)
1. Add the following readers support:
   ACR1251U-C9
   ACR1255U-J1
   ACR3201-A1
   ACM1251U-Z2
   ACR39U-U1
2. Update the target to Android 5.1.1.
3. Remove WTX delay in transmit() method of Reader class.
4. Fix incorrect Fl/Dl value in setProtocol() method of Reader class.
5. Allow non-CCID interfaces in open() method of Reader class.
6. Set card present if it is SAM slot.
7. Force to claim the interface if it failed in open() method of Reader class.
8. Read the card state from the interrupt endpoint asynchronously.
9. Trigger the state change on the thread.

v1.1.2 (30/6/2014)
1. Fix a bug that the card state of SAM slot is changed to absent if power down
   action is applied.
2. Add the following readers support:
   ACR32U-A1
   ACR38U
   ACR38U-SAM
   ACR3901U
   ACR1222L
   ACR123U-A1
   ACR123U
   ACM123S1-Z1
   ACR1251U-C (SAM)
   ACR1251U-C
   ACR1251UK
   ACR1251U-C1
   ACR1252U-A1
   ACR1252U-A2
   ACR1252U-A1 (PICC)
   ACR1256U
   ACR1261U-C1
   ACR1281U-K (PICC)
   ACR1281U-K (PICC + ICC)
   ACR1281U-K (PICC + ICC + SAM)
   ACR1281U-K9 (PICC + ICC + 4SAM)
   CryptoMate
   CryptoMate T1
   CryptoMate T2
3. Do not fall through to cold reset when doing the warm reset.
4. Change the delay of cold reset to 10 ms.
5. Set the parameters if the card state is specific in power() method of Reader
   class.
6. Retry the warm reset if it failed.
7. Handle the time extension request from reader.
8. Exit if the default PTS values is tried in setProtocol() method of Reader
   class.
9. Update the target to Android 4.4.

v1.1.1 (12/7/2012)
1. Add the following readers support:
   ACR39U
   ACR39K
   ACR39T
   ACR39F
   ACR39U-SAM
   ACR88U
   ACR89U-A1
   ACR89U-A2
   ACR89U-A3
   ACR125
   ACR1251U-A1
   ACR1251U-A2
   ACR1281U-C2 (qPBOC)
   ACR1281U    (qPBOC)
   ACR1281U-C3 (qPBOC)
   ACR1281U-C4 (BSI)
   ACR1281U-C5 (BSI)
   ACR1281U-C6
   ACR1281U-C7
   ACR1283L-D1
   ACR1283L-D2
   CryptoMate64

v1.1.0 (18/5/2012)
1. Add the following readers support:
   ACR83U-A1
   APG8201-A1
2. Add utility classes Features, PinVerify, PinModify, PinProperties,
   TlvProperties and ReadKeyOption to support PC/SC 2.0 Part 10 and
   ACR83/APG8201 specific controls.
3. Handle PC/SC 2.0 Part 10 and ACR83/APG8201 specific controls in
   Reader.control().

v1.0.0 (30/12/2011)
1. New Release



Demo

v1.1.2 (8/5/2015)
1. Update the target to Android 5.1.1.

v1.1.1 (7/11/2013)
1. Fix a bug that command and response will be overwritten if multiple commands
   are sent in TransmitTask.
2. Update the target to Android 4.4.

v1.1.0 (18/5/2012)
1. Update the layout to handle PC/SC 2.0 Part 10 and ACR83/APG8201 specific
   controls.
2. Log the control code.

v1.0.0 (30/12/2011)
1. New Release



File Contents
-------------

API Documentation:  SmartCard\doc
Sample Application: ReaderTest
Android Package:    ReaderTest.apk
Class Library:      ReaderTest\libs\acssmc-1.1.3.jar



Support
-------

In case of problem, please contact ACS through:

Web Site: http://www.acs.com.hk/
E-mail: info@acs.com.hk
Tel: +852 2796 7873
Fax: +852 2796 1286



-------------------------------------------------------------------------------
Copyright (C) 2011-2016 Advanced Card Systems Ltd. All Rights Reserved.

No part of this reference manual may be reproduced or transmitted in any from
without the expressed, written permission of ACS.

Due to rapid change in technology, some of specifications mentioned in this
publication are subject to change without notice. Information furnished is
believed to be accurate and reliable. ACS assumes no responsibility for any
errors or omissions, which may appear in this document.

Android is a trademark of Google Inc.
