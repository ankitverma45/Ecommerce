import Image1 from "../../Image/pngwing.com (1).png"
import Image2 from "../../Image/pngwing.com (2).png"
import Image14 from "../../Image/pngwing.com (14).png"
import Image16 from "../../Image/pngwing.com (16).png"
import Image17 from "../../Image/pngwing.com (17).png"
import Image18 from "../../Image/pngwing.com (18).png"
import Image19 from "../../Image/pngwing.com (19).png"
import Image20 from "../../Image/pngwing.com (20).png"
import Image21 from "../../Image/pngwing.com (21).png"
import Image22 from "../../Image/pngwing.com (22).png"
import Image23 from "../../Image/pngwing.com (23).png"

import Image8 from "../../Image/pngwing.com (8).png"
import Image10 from "../../Image/pngwing.com (10).png"
import Image11 from "../../Image/pngwing.com (11).png"
import Image12 from "../../Image/pngwing.com (12).png"
import Image13 from "../../Image/pngwing.com (13).png"
import Image4 from "../../Image/pngwing.com (4).png"

import Image6 from "../../Image/pngwing.com (6).png"
import Image24 from "../../Image/pngwing.com (24).png"
import Image25 from "../../Image/pngwing.com (25).png"
import Image26 from "../../Image/pngwing.com (26).png"
import Image27 from "../../Image/pngwing.com (27).png"
import Image28 from "../../Image/pngwing.com (28).png"
import Image29 from "../../Image/pngwing.com (29).png"
import Image30 from "../../Image/pngwing.com (30).png"
import Image31 from "../../Image/pngwing.com (31).png"
import Image32 from "../../Image/pngwing.com (32).png"
import Image33 from "../../Image/pngwing.com (33).png"




const data = [
    {
        name: "Oppo",
        Sd: "SD 680",
        battery: "6000 mAh",
        rs: 32000,
        frs: 40000,
        img: Image1
    },
    {
        name: "One Pulse",
        Sd: "SD 540",
        battery: "4500 mAh",
        rs: 22000,
        frs: 30000,
        img: Image2
    },
    {
        name: "MI",
        Sd: "SD 520",
        battery: "5500 mAh",
        rs: 42000,
        frs: 50000,
        img: Image14
    },
    {
        name: "Sony",
        Sd: "SD 640",
        battery: "6500 mAh",
        rs: 32000,
        frs: 40000,
        img: Image20
    },
    {
        name: "Poco",
        Sd: "SD 440",
        battery: "4200 mAh",
        rs: 23000,
        frs: 28000,
        img: Image16
    }, {
        name: "Samsang S22",
        Sd: "SD 740",
        battery: "5400 mAh",
        rs: 35000,
        frs: 41000,
        img: Image17
    },
    {
        name: "Vivo",
        Sd: "SD 520",
        battery: "6000 mAh",
        rs: 31000,
        frs: 35000,
        img: Image18
    },
    {
        name: "One Pulse",
        Sd: "SD 540",
        battery: "4500 mAh",
        rs: 22000,
        frs: 30000,
        img: Image19
    },
    {
        name: "Iphone",
        Sd: "SD 440",
        battery: "6500 mAh",
        rs: 74000,
        frs: 80000,
        img: Image20
    },
    {
        name: "Relmi",
        Sd: "SD 550",
        battery: "3500 mAh",
        rs: 20000,
        frs: 25000,
        img: Image21
    },
    {
        name: "Redmi",
        Sd: "SD 600",
        battery: "6600 mAh",
        rs: 15000,
        frs: 19000,
        img: Image22
    },
    {
        name: "Iqoo",
        Sd: "SD 540",
        battery: "4500 mAh",
        rs: 22000,
        frs: 30000,
        img: Image23
    },

]
const ldata = [
    {
        name: "HP",
        Sd: "8 RAM",
        battery: "512 GB SSD",
        rs: 49000,
        frs: 55000,
        img: Image4
    },
    {
        name: "DELL",
        Sd: "12 RAM",
        battery: "512 GB SSD",
        rs: 55000,
        frs: 65000,
        img: Image10

    },
    {
        name: "ASUS",
        Sd: "16 RAM",
        battery: "256 GB SSD",
        rs: 38000,
        frs: 45000,
        img: Image8
    },
    {
        name: "Samsang i3",
        Sd: "4 RAM",
        battery: "128 GB SSD",
        rs: 30000,
        frs: 37000,
        img: Image12
    },
    {
        name: "Apple",
        Sd: "16 RAM",
        battery: "512 GB SSD",
        rs: 89000,
        frs: 99000,
        img: Image10
    },
    {
        name: "Lenovo",
        Sd: "32 RAM",
        battery: "512 GB SSD",
        rs: 79000,
        frs: 85000,
        img: Image11
    },
    {
        name: "ASUS i7",
        Sd: "4 RAM",
        battery: "256 GB SSD",
        rs: 25000,
        frs: 31000,
        img: Image12
    },
    {
        name: "Samsang i5",
        Sd: "32 RAM",
        battery: "512 GB SSD",
        rs: 55000,
        frs: 70000,
        img: Image13
    },
    {
        name: "DEll i3",
        Sd: "8 RAM",
        battery: "128 GB SSD",
        rs: 39000,
        frs: 45000,
        img: Image11
    },



]
const cdata = [
    {
        name: "Optiplex 7490",
        Sd: "GTX 1650 Ti",
        battery: " 4 GB GDDR6",
        rs: 93000,
        frs: 99000,
        img: Image6
    },
    {
        name: "Samsang i7",
        Sd: "GTX 1550 Ti",
        battery: " 16 GB GDDR6",
        rs: 103000,
        frs: 110000,
        img: Image24
    },
    {
        name: "Acer i3",
        Sd: "GTX 2050 Ti",
        battery: " 32 GB GDDR6",
        rs: 150000,
        frs: 121000,
        img: Image25
    },
    {
        name: "Dell Optiplex",
        Sd: "GTX 1150 Ti",
        battery: " 8 GB GDDR6",
        rs: 99000,
        frs: 105000,
        img: Image26
    },
    {
        name: "Entwinoo",
        Sd: "GTX 1650 Ti",
        battery: " 32 GB GDDR6",
        rs: 79000,
        frs: 89000,
        img: Image27
    },
    {
        name: "Gandiva",
        Sd: "GTX 1154 Ti",
        battery: " 8 GB GDDR6",
        rs: 66000,
        frs: 69000,
        img: Image28
    },
    {
        name: "Entwino Core i5",
        Sd: "GTX 1850 Ti",
        battery: " 64 GB GDDR6",
        rs: 88000,
        frs: 92000,
        img: Image29
    },
    {
        name: "HP ENVY AIO",
        Sd: "GTX 1650 Ti",
        battery: " 8 GB GDDR6",
        rs: 81000,
        frs: 85000,
        img: Image30
    },
    {
        name: "Acer Ka270H",
        Sd: "GTX 1250 Ti",
        battery: " 8 GB GDDR6",
        rs: 73000,
        frs: 79000,
        img: Image31
    },
    {
        name: "Sony",
        Sd: "GTX 1350 Ti",
        battery: " 16 GB GDDR6",
        rs: 66000,
        frs: 72000,
        img: Image32
    },
    {
        name: "LG",
        Sd: "GTX 1050 Ti",
        battery: " 16 GB GDDR6",
        rs: 45000,
        frs: 51000,
        img: Image33
    },
    {
        name: "Dell i7",
        Sd: "GTX 1950 Ti",
        battery: " 32 GB GDDR6",
        rs: 97000,
        frs: 110000,
        img: Image30
        
    },
   
]
export default data
export { ldata ,cdata}