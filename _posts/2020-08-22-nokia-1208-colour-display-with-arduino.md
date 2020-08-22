---
date: 2020-08-22 20:09:17
layout: post
title: Nokia 1208 Colour Display With Arduino
subtitle: ""
description: How to use Nokia 1600, 1208, 1209, 2310, 2126 CDMA, (6125small,
  6136, N71small) colour display with arduino
image: /assets/img/uploads/thumbnail.jpg
category: arduino
tags:
  - Arduino
  - Nokia
  - Colour
  - Display
  - TFT
author: e-lab innovations
paginate: false
---
**Overview**

In this Arduino Tutorial, we will learn how to use Nokia 1600, 1208, 1209, 2310, 2126 CDMA, (6125small, 6136, N71small) colour display with Arduino.

These displays use SPI 9-bits to communicate, 3 or 4 pins are required to the interface (RST is optional).

In my case, I am using a Nokia 1208 display.

![Nokia 1208](/assets/img/uploads/nokia-1208.jpg "Nokia 1208")

**Parts needed for this Arduino Tutorial**

* Arduino UNO / Nano or compatible board
* Nokia 1208 display or any display in the above list
* SMD to DIP SOP MSOP SSOP TSSOP SOT23 10 PIN converter
* Display connector
* 1N4007 Diode
* Jumper wires
* 9v power supply

**Notes**

* Connect +Vled to +9V and -Vled to GND
* All communication lines use 3.3v logic level. So use a Level shifter
* These displays are 9bit SPI protocol, so we need a [Library ](https://github.com/kr4fty/ST7628-Nokia-1600-LCD-Library)for interfacing with Arduino.

**Step 1: LCD Connector and Breakout Board**

Solder the display connector in 10 Pin SMD to DIP converter board.

![SMD to DIP Breakout board](/assets/img/uploads/breakout-board.jpg "SMD to DIP Breakout board")

![](/assets/img/uploads/breakout-board-with-connector.png)

![](/assets/img/uploads/lcd-connected-with-bb.png)

**Step 2: Electrical Interfacing**

**Pinout**

```
 1: SCLK
 2: SDA                                        1  _+--+_ 10
 3: GND                                        2  _+--+_  9
 4: /CS                                        3  _+--+_  8
 5: /RES                                       4  _+--+_  7
 6: +Vled                                      5  _+--+_  6
 7: -Vled                        +-----------------+--+---+
 8: ------                       |+----------------------+|
 9: Vdda +2.8v (2.4v - 3.3V)     ||      Nokia 1600      ||
10: Vddio +1.8v (1.65v - 3.0v)   ||         LCD          ||
                                 ||       (98x70)        ||
                                 ||    visible 96x68     ||
                                 ||                      ||    
                                 |+----------------------+|
                                 +------------------------+
```

**Sample Working**

<iframe width="100%" src="https://www.youtube.com/embed/NtRfAeXa4wY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>