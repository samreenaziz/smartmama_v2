import express from "express";
import cors from "cors";

const app = express();

// Use CORS middleware
app.use(cors());

const trimesterData = {
  first: [
    {
      id: "1",
      name: "Nature Made Prenatal Multivitamin",
      price: 19.99,
      link: "https://www.amazon.com/Nature-Made-Prenatal-DHA-Softgels/dp/B005DEK9FO",
      image: "https://m.media-amazon.com/images/I/71YMGgKoFXL._AC_UY218_.jpg",
    },
    {
      id: "2",
      name: "Preggie Pop Drops Plus w/ Vitamin B6",
      price: 6.99,
      link: "https://www.amazon.com/Preggie-Pop-Drops-Vitamin-Sickness/dp/B00XLUV4E2",
      image: "https://m.media-amazon.com/images/I/71Mdcq-qGDL._AC_SL1500_.jpg",
    },
    {
      id: "3",
      name: "Leachco Snoogle Original Maternity/Pregnancy Total Body Pillow",
      price: 39.99,
      link: "https://www.amazon.com/Leachco-Snoogle-Original-Maternity-Pregnancy/dp/B0000635WI",
      image: "https://m.media-amazon.com/images/I/71q+l-DbxYL._AC_SL1500_.jpg",
    },
    {
      id: "4",
      name: "Motherhood Maternity Women's Maternity Essential Stretch Full Length Secret Fit Belly Leggings",
      price: 25.99,
      link: "https://www.amazon.com/BONVIGOR-Maternity-Leggings-Workout-Running/dp/B0BSBGK4H3",
      image: "https://m.media-amazon.com/images/I/61jrIsoA7tL._AC_SY500_.jpg",
    },
    {
      id: "5",
      name: "Palmer's Cocoa Butter Formula Tummy Butter for Stretch Marks",
      price: 8.97,
      link: "https://www.amazon.ca/Palmers-Formula-Stretch-Intensive-Treatment/dp/B00LSN0OCC",
      image: "https://m.media-amazon.com/images/I/71KyPfcINRL._AC_SL1500_.jpg",
    },
    {
      id: "6",
      name: "Expecting You: A Keepsake Pregnancy Journal",
      price: 14.99,
      link: "https://www.amazon.ca/Expecting-You-Keepsake-Pregnancy-Journal/dp/1938298349",
      image: "https://m.media-amazon.com/images/I/61Z8AeqNgSL._SL1400_.jpg",
    },
    {
      id: "7",
      name: "What to Expect When You're Expecting",
      price: 13.99,
      link: "https://www.amazon.ca/What-Expect-When-Youre-Expecting/dp/0761187480",
      image: "https://m.media-amazon.com/images/I/91SvhlQthSL._SL1500_.jpg",
    },
    {
      id: "8",
      name: "Gratlin Women's Nursing Bras Support Nursing Sports Bra Racerback Wireless Padded Breastfeeding Maternity Bras",
      price: 20.99,
      link: "https://www.amazon.ca/Gratlin-Racerback-Wireless-Breastfeeding-Maternity/dp/B07HK88QLW",
      image: "https://m.media-amazon.com/images/I/71O768014uL._AC_SX679_.jpg",
    },
    {
      id: "9",
      name: "Preggie Pop Drops Plus w/ Vitamin B6",
      price: 6.99,
      link: "https://www.amazon.com/Three-Lollies-Preggie-Sickness-Raspberry/dp/B0083VODME",
      image: "https://m.media-amazon.com/images/I/71QhBNV5OPL._AC_SL1500_.jpg",
    },
    {
      id: "10",
      name: "Hydro Flask Water Bottle - 24oz",
      price: 29.95,
      link: "https://www.amazon.com/Hydro-Flask-SYNCHKG115753-Standard-Bottle/dp/B01KXHIXSK",
      image: "https://m.media-amazon.com/images/I/51AN67DZWpL._AC_SL1500_.jpg",
    },
  ],
  second: [
    {
      id: "1",
      name: "Garden of Life Prenatal DHA Omega 3 Fish Oil",
      price: 19.97,
      link: "https://www.amazon.com/Garden-Life-Ultra-Pure-Omega/dp/B0039LF25A",
      image:
        "https://m.media-amazon.com/images/I/817Csj29x6L._AC_SL1500_.jpghttps://m.media-amazon.com/images/I/817Csj29x6L._AC_SL1500_.jpg",
    },
    {
      id: "2",
      name: "Earth Mama Belly Butter",
      price: 14.99,
      link: "https://www.amazon.com/Belly-Butter-Dry-Skin-Pregnancy-Moisturizer/dp/B07DQ75MRC",
      image:
        "https://m.media-amazon.com/images/I/41tu3Xw3GoL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: "3",
      name: "AZMED Maternity Belt",
      price: 24.95,
      link: "https://www.amazon.com/Belly-Pregnancy-Maternity-Support-Abdominal/dp/B08CBPNB4P",
      image: "https://m.media-amazon.com/images/I/51pmA-BvAVL.jpg",
    },

    {
      id: "4",
      name: "Burt's Bees Mama Bee Belly Butter",
      price: 12.57,
      link: "https://www.amazon.com/Burts-Bees-Mama-Belly-Butter/dp/B01IAE2N52",
      image:
        "https://m.media-amazon.com/images/I/51zh1uPagtL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: "5",
      name: "BellyBuds, Baby-Bump Headphones",
      price: 29.99,
      link: "https://www.amazon.com/BellyBuds-Baby-Bump-Headphones-Bellyphones-WavHello/dp/B01A6B3H9I",
      image: "https://m.media-amazon.com/images/I/61RujEgI-SL._SL1500_.jpg",
    },
    {
      id: "6",
      name: "Kindred Bravely French Terry Racerback Nursing Sleep Bra",
      price: 35.99,
      link: "https://www.amazon.com/dp/B0D7LL5CMF",
      image: "https://m.media-amazon.com/images/I/71jkxxz8APL._AC_SX522_.jpg",
    },
    {
      id: "7",
      name: "Ingrid & Isabel Women's Maternity Crossover Panel Active Capri Legging",
      price: 29.99,
      link: "https://www.amazon.com/Ingrid-Isabel-Maternity-Crossover-Supports/dp/B09XP8SYB3",
      image: "https://m.media-amazon.com/images/I/61BvNWxrvIL._AC_SY500_.jpg",
    },

    {
      id: "8",
      name: "Boppy Pregnancy Wedge Pillow",
      price: 19.99,
      link: "https://www.amazon.com/Boppy-Pregnancy-Removable-Grassland-Positioning/dp/B09YTHWCPZ",
      image:
        "https://m.media-amazon.com/images/I/51DfnNkEPuL._SX300_SY300_QL70_FMwebp_.jpg",
    },

    {
      id: "9",
      name: "Bio-Oil Skincare Oil, 4.2 oz",
      price: 16.39,
      link: "https://www.amazon.com/Bio-Oil-4-2oz-Multiuse-Skincare-Oil/dp/B004AI97MA",
      image:
        "https://m.media-amazon.com/images/I/41+kewGQ2VL._SY300_SX300_.jpg",
    },
    {
      id: "10",
      name: "Women's Maternity Yoga Pants Over The Belly Pregnancy Leggings",
      price: 19.99,
      link: "https://www.amazon.com/CRZ-YOGA-Butterluxe-Maternity-Leggings/dp/B0C898YLJM",
      image: "https://m.media-amazon.com/images/I/61oAzqfvR1L._AC_SY500_.jpg",
    },
  ],

  third: [
    {
      id: "1",
      name: "Mama Mio The Tummy Rub Butter",
      price: 28.0,
      link: "https://www.amazon.com/Mama-Mio-Butter-Fragrance-fragrance/dp/B088CJMYB3",
      image: "https://m.media-amazon.com/images/I/61u10Cw26WL._SL1500_.jpg",
    },
    {
      id: "2",
      name: "HOFISH Full Bust Seamless Nursing Maternity Bras",
      price: 29.99,
      link: "https://www.amazon.com/HOFISH-Seamless-Nursing-Maternity-Elegant/dp/B0BPRT93FP",
      image: "https://m.media-amazon.com/images/I/71lQjH+Z7sL._AC_SX522_.jpg",
    },
    {
      id: "3",
      name: "Lansinoh Breastfeeding Salve, 100% Natural Lanolin Nipple Cream",
      price: 8.73,
      link: "https://www.amazon.com/Lansinoh-Lanolin-Breastfeeding-Mothers-Ounce/dp/B00432ID82",
      image: "https://m.media-amazon.com/images/I/71A5INcSGyL._AC_SL1500_.jpg",
    },
    {
      id: "4",
      name: "Boppy Side Sleeper Pregnancy Pillow",
      price: 29.84,
      link: "https://www.amazon.com/Boppy-Sleeper-Pregnancy-Pillow-Falling/dp/B08MW644QP",
      image: "https://m.media-amazon.com/images/I/71jAXbcpCHL._AC_SL1500_.jpg",
    },
    {
      id: "5",
      name: "Earth Mama Organic Third Trimester Tea",
      price: 5.97,
      link: "https://www.amazon.com/Earth-Mama-Trimester-Childbirth-Preparation/dp/B07P8PFQD2",
      image: "https://m.media-amazon.com/images/I/71aDs66g0YL._SL1500_.jpg",
    },
    {
      id: "6",
      name: "Maternity Belt - NEOtech Care Brand",
      price: 24.99,
      link: "https://www.amazon.com/Maternity-Pregnancy-Support-Belt-Brace/dp/B01GO2LI2G",
      image:
        "https://m.media-amazon.com/images/I/419iycJ2AJL._SY445_SX342_QL70_FMwebp_.jpg",
    },
    {
      id: "7",
      name: "Medela Easy Expression Bustier",
      price: 39.99,
      link: "https://www.amazon.com/Medela-Womens-Hands-Free-Pumping-Bustier/dp/B09WWS4QQS",
      image: "https://m.media-amazon.com/images/I/81z4TDRaP+L._AC_SX569_.jpg",
    },
    {
      id: "8",
      name: "Baby Be Mine Maternity Labor Delivery Nursing Robe",
      price: 29.99,
      link: "https://www.amazon.com/Baby-Be-Mine-Maternity-pregnancy/dp/B08KWLXXDR",
      image: "https://m.media-amazon.com/images/I/71iEMWcWwRL._AC_SY550_.jpg",
    },
    {
      id: "9",
      name: "Intimate Portal Women Under The Bump Maternity Panties",
      price: 19.9,
      link: "https://www.amazon.com/Intimate-Portal-Maternity-Pregnancy-Underwear/dp/B07KLQ71LW",
      image: "https://m.media-amazon.com/images/I/71k8y4KfWkL._AC_SX569_.jpg",
    },
    {
      id: "10",
      name: "Belly Bandit Upsie Belly Pregnancy Support Band",
      price: 69.95,
      link: "https://www.amazon.com/Belly-Bandit-Postpartum-Black-Small/dp/B07Q8JKB3R",
      image: "https://m.media-amazon.com/images/I/71zDC5aJJjL._SL1500_.jpg",
    },
  ],

  all: [
    {
      id: "1",
      name: "Nature Made Prenatal Multivitamin",
      price: 19.99,
      link: "https://www.amazon.com/Nature-Made-Prenatal-DHA-Softgels/dp/B005DEK9FO",
      image: "https://m.media-amazon.com/images/I/71YMGgKoFXL._AC_UY218_.jpg",
    },
    {
      id: "2",
      name: "Preggie Pop Drops Plus w/ Vitamin B6",
      price: 6.99,
      link: "https://www.amazon.com/Preggie-Pop-Drops-Vitamin-Sickness/dp/B00XLUV4E2",
      image: "https://m.media-amazon.com/images/I/71Mdcq-qGDL._AC_SL1500_.jpg",
    },
    {
      id: "3",
      name: "Leachco Snoogle Original Maternity/Pregnancy Total Body Pillow",
      price: 39.99,
      link: "https://www.amazon.com/Leachco-Snoogle-Original-Maternity-Pregnancy/dp/B0000635WI",
      image: "https://m.media-amazon.com/images/I/71q+l-DbxYL._AC_SL1500_.jpg",
    },
    {
      id: "4",
      name: "Motherhood Maternity Women's Maternity Essential Stretch Full Length Secret Fit Belly Leggings",
      price: 25.99,
      link: "https://www.amazon.com/BONVIGOR-Maternity-Leggings-Workout-Running/dp/B0BSBGK4H3",
      image: "https://m.media-amazon.com/images/I/61jrIsoA7tL._AC_SY500_.jpg",
    },
    {
      id: "5",
      name: "Palmer's Cocoa Butter Formula Tummy Butter for Stretch Marks",
      price: 8.97,
      link: "https://www.amazon.ca/Palmers-Formula-Stretch-Intensive-Treatment/dp/B00LSN0OCC",
      image: "https://m.media-amazon.com/images/I/71KyPfcINRL._AC_SL1500_.jpg",
    },
    {
      id: "6",
      name: "Expecting You: A Keepsake Pregnancy Journal",
      price: 14.99,
      link: "https://www.amazon.ca/Expecting-You-Keepsake-Pregnancy-Journal/dp/1938298349",
      image: "https://m.media-amazon.com/images/I/61Z8AeqNgSL._SL1400_.jpg",
    },
    {
      id: "7",
      name: "What to Expect When You're Expecting",
      price: 13.99,
      link: "https://www.amazon.ca/What-Expect-When-Youre-Expecting/dp/0761187480",
      image: "https://m.media-amazon.com/images/I/91SvhlQthSL._SL1500_.jpg",
    },
    {
      id: "8",
      name: "Gratlin Women's Nursing Bras Support Nursing Sports Bra Racerback Wireless Padded Breastfeeding Maternity Bras",
      price: 20.99,
      link: "https://www.amazon.ca/Gratlin-Racerback-Wireless-Breastfeeding-Maternity/dp/B07HK88QLW",
      image: "https://m.media-amazon.com/images/I/71O768014uL._AC_SX679_.jpg",
    },
    {
      id: "9",
      name: "Preggie Pop Drops Plus w/ Vitamin B6",
      price: 6.99,
      link: "https://www.amazon.com/Three-Lollies-Preggie-Sickness-Raspberry/dp/B0083VODME",
      image: "https://m.media-amazon.com/images/I/71QhBNV5OPL._AC_SL1500_.jpg",
    },
    {
      id: "10",
      name: "Hydro Flask Water Bottle - 24oz",
      price: 29.95,
      link: "https://www.amazon.com/Hydro-Flask-SYNCHKG115753-Standard-Bottle/dp/B01KXHIXSK",
      image: "https://m.media-amazon.com/images/I/51AN67DZWpL._AC_SL1500_.jpg",
    },

    {
      id: "11",
      name: "Garden of Life Prenatal DHA Omega 3 Fish Oil",
      price: 19.97,
      link: "https://www.amazon.com/Garden-Life-Ultra-Pure-Omega/dp/B0039LF25A",
      image:
        "https://m.media-amazon.com/images/I/817Csj29x6L._AC_SL1500_.jpghttps://m.media-amazon.com/images/I/817Csj29x6L._AC_SL1500_.jpg",
    },
    {
      id: "12",
      name: "Earth Mama Belly Butter",
      price: 14.99,
      link: "https://www.amazon.com/Belly-Butter-Dry-Skin-Pregnancy-Moisturizer/dp/B07DQ75MRC",
      image:
        "https://m.media-amazon.com/images/I/41tu3Xw3GoL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: "13",
      name: "AZMED Maternity Belt",
      price: 24.95,
      link: "https://www.amazon.com/Belly-Pregnancy-Maternity-Support-Abdominal/dp/B08CBPNB4P",
      image: "https://m.media-amazon.com/images/I/51pmA-BvAVL.jpg",
    },

    {
      id: "14",
      name: "Burt's Bees Mama Bee Belly Butter",
      price: 12.57,
      link: "https://www.amazon.com/Burts-Bees-Mama-Belly-Butter/dp/B01IAE2N52",
      image:
        "https://m.media-amazon.com/images/I/51zh1uPagtL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: "15",
      name: "BellyBuds, Baby-Bump Headphones",
      price: 29.99,
      link: "https://www.amazon.com/BellyBuds-Baby-Bump-Headphones-Bellyphones-WavHello/dp/B01A6B3H9I",
      image: "https://m.media-amazon.com/images/I/61RujEgI-SL._SL1500_.jpg",
    },
    {
      id: "16",
      name: "Kindred Bravely French Terry Racerback Nursing Sleep Bra",
      price: 35.99,
      link: "https://www.amazon.com/dp/B0D7LL5CMF",
      image: "https://m.media-amazon.com/images/I/71jkxxz8APL._AC_SX522_.jpg",
    },
    {
      id: "17",
      name: "Ingrid & Isabel Women's Maternity Crossover Panel Active Capri Legging",
      price: 29.99,
      link: "https://www.amazon.com/Ingrid-Isabel-Maternity-Crossover-Supports/dp/B09XP8SYB3",
      image: "https://m.media-amazon.com/images/I/61BvNWxrvIL._AC_SY500_.jpg",
    },

    {
      id: "18",
      name: "Boppy Pregnancy Wedge Pillow",
      price: 19.99,
      link: "https://www.amazon.com/Boppy-Pregnancy-Removable-Grassland-Positioning/dp/B09YTHWCPZ",
      image:
        "https://m.media-amazon.com/images/I/51DfnNkEPuL._SX300_SY300_QL70_FMwebp_.jpg",
    },

    {
      id: "19",
      name: "Bio-Oil Skincare Oil, 4.2 oz",
      price: 16.39,
      link: "https://www.amazon.com/Bio-Oil-4-2oz-Multiuse-Skincare-Oil/dp/B004AI97MA",
      image:
        "https://m.media-amazon.com/images/I/41+kewGQ2VL._SY300_SX300_.jpg",
    },
    {
      id: "21",
      name: "Mama Mio The Tummy Rub Butter",
      price: 28.0,
      link: "https://www.amazon.com/Mama-Mio-Butter-Fragrance-fragrance/dp/B088CJMYB3",
      image: "https://m.media-amazon.com/images/I/61u10Cw26WL._SL1500_.jpg",
    },
    {
      id: "22",
      name: "HOFISH Full Bust Seamless Nursing Maternity Bras",
      price: 29.99,
      link: "https://www.amazon.com/HOFISH-Seamless-Nursing-Maternity-Elegant/dp/B0BPRT93FP",
      image: "https://m.media-amazon.com/images/I/71lQjH+Z7sL._AC_SX522_.jpg",
    },
    {
      id: "23",
      name: "Lansinoh Breastfeeding Salve, 100% Natural Lanolin Nipple Cream",
      price: 8.73,
      link: "https://www.amazon.com/Lansinoh-Lanolin-Breastfeeding-Mothers-Ounce/dp/B00432ID82",
      image: "https://m.media-amazon.com/images/I/71A5INcSGyL._AC_SL1500_.jpg",
    },
    {
      id: "24",
      name: "Boppy Side Sleeper Pregnancy Pillow",
      price: 29.84,
      link: "https://www.amazon.com/Boppy-Sleeper-Pregnancy-Pillow-Falling/dp/B08MW644QP",
      image: "https://m.media-amazon.com/images/I/71jAXbcpCHL._AC_SL1500_.jpg",
    },
    {
      id: "25",
      name: "Earth Mama Organic Third Trimester Tea",
      price: 5.97,
      link: "https://www.amazon.com/Earth-Mama-Trimester-Childbirth-Preparation/dp/B07P8PFQD2",
      image: "https://m.media-amazon.com/images/I/71aDs66g0YL._SL1500_.jpg",
    },
    {
      id: "26",
      name: "Maternity Belt - NEOtech Care Brand",
      price: 24.99,
      link: "https://www.amazon.com/Maternity-Pregnancy-Support-Belt-Brace/dp/B01GO2LI2G",
      image:
        "https://m.media-amazon.com/images/I/419iycJ2AJL._SY445_SX342_QL70_FMwebp_.jpg",
    },
    {
      id: "27",
      name: "Medela Easy Expression Bustier",
      price: 39.99,
      link: "https://www.amazon.com/Medela-Womens-Hands-Free-Pumping-Bustier/dp/B09WWS4QQS",
      image: "https://m.media-amazon.com/images/I/81z4TDRaP+L._AC_SX569_.jpg",
    },
    {
      id: "28",
      name: "Baby Be Mine Maternity Labor Delivery Nursing Robe",
      price: 29.99,
      link: "https://www.amazon.com/Baby-Be-Mine-Maternity-pregnancy/dp/B08KWLXXDR",
      image: "https://m.media-amazon.com/images/I/71iEMWcWwRL._AC_SY550_.jpg",
    },
    {
      id: "29",
      name: "Intimate Portal Women Under The Bump Maternity Panties",
      price: 19.9,
      link: "https://www.amazon.com/Intimate-Portal-Maternity-Pregnancy-Underwear/dp/B07KLQ71LW",
      image: "https://m.media-amazon.com/images/I/71k8y4KfWkL._AC_SX569_.jpg",
    },
    {
      id: "30",
      name: "Belly Bandit Upsie Belly Pregnancy Support Band",
      price: 69.95,
      link: "https://www.amazon.com/Belly-Bandit-Postpartum-Black-Small/dp/B07Q8JKB3R",
      image: "https://m.media-amazon.com/images/I/71zDC5aJJjL._SL1500_.jpg",
    },
  ],
};

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send(trimesterData);
});

// Define a port
const PORT = 8080;

// Start the server and have it listen on port 8080
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
