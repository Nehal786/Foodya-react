import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMPEBUSERMVFhUTGBUaGBYXFRIVFhcVGBIWFxUSFRMYHSggJBolJxcWITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGzIlICUwLzAvLS8tLS8tLS0rLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4AMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcBAgj/xABAEAACAQIDBQUEBwUIAwAAAAAAAQIDEQQFEgYhMUFRImFxgZETUqGxBzIzQmLB0RQjcrLhFiRDc4KSk8IX4vH/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAwQBAgUG/8QALxEBAAICAQMEAQMCBgMAAAAAAAECAxEEEiExBRNBUWEiMnEVMxSBkaGxwSNCYv/aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMWJxMKUdU5KK6sjyZaY43edQ3pjtedVjbSpZ9h5OyqK/epJerRWr6hx7TqLJ7cLPWNzVIp34FyJ34VXpkeNjY9AAAAAAAAAAAAAAAAAAAAAAAAAHk5JJt8FvMTOo3LMRudOd5tj5Yio5N7uEV0jyPH8vk2z5JtPj4em42CMNIiPPy0yssJ3ZnNnTmqU3eEnZfhk+HkdX03mzS8Y7T2n/ZzefxYvWclfMLoelcJXsxxPtcZSorhB6pd7SuvTd6nJz5ZycumKPEd5dHDjinGtknzPaGHBV26+KrXdoRkl03cN3+n4kWHJac2bLvtCTLSIxYseu8smCzWdPCwqVHqlOpZX93VZ8PBm+Dl3px63vO5mdf7tMvGrbPatO0RCxnYc0AAAAAAAAAAAAAAAAAAAAAA0s6f93q/wAEv5WVuZOsF9fSbjf3a/y52eNepDIJ24CJmO8Exvs6Rl9fXRhN/eim/Tee0wZOvFW0/TymWnTkmv5VjI6+qrXxEvuxk/V7l8DicO+8uXNPxDrcqmsePFHyx05OGXzlzq1PVbr/ACZpWZrwbW+bS2mIty4j4rDNmNHT+yUOmltd7kr/APYk5FOmcGFphvuMuVbj0DjAAAAAAAAAAAAAAAAAAAAAAGPEUVUhKD4STT81Y0yUi9ZrPy2pbptFo+HNsRRdOcoS4xbT8jxeSk47zWfh6ul4vWLR8sZo2BrY6Jg6Lhhow5qnbz0nscVJpx4r+P8Ap5fJaLZpt+VEw2OlCnOmrWqWv13dDytORbHS2OPl6G+Ct71vPw2KmZa6dGk42jTact99W/e7W8Sa3Li1MePWorPf8o4401ve++8+ErhaqxWPU43cIK+9W3KNlu8WXsV45PNi9fEKeSvscTot5lazvuOAAAAAAAAAAAAAAAAAAAAAAAIPaDI/b9unZTXG/CS/U5fP9P8Ae/XT93/LocPm+1+m3j/hUsRgalP68JRXVp29eB57Jx8uP99Zh2qZ8d/2ztLbNZO6slVnbRF7lzck+fcdH03he5MZbeIUufy+iJx18rmekcJQc7yuVCo3Z6G+zLlv+6+88nzuJbDeZ1+mfl6PicmuWkRvujqdNyajFNt8Et7fkUq1m06rG5W7WisbmV52dyz9np9r6898u7pE9T6fxPYx/q8z5ed5vJ96/bxCWOgpgAAAAAAAAAAAAAAAAAAAAAAABF7S09WFn3WfpJFH1GvVx7LfBtrPVH7GYm8J0/depeD3P5fEp+j5d0mn1/2s+qY9Xi/2sh2nLVzbSvanCF/rNt+CX9TjesZNY61+3U9Lpu82+m7s3hYww8JaVqkrt2V97ut5a9Ow1pgrOu8q/NyTbNaN9ksX1MAAAAAAAAAAAAAAAAAAAAAAAAAGHF0ddOUfei16ojy166TX7hvjt02i30pmy1b2eJSf3k4+fFfI836Zf2+R0z89nd9Qr14d/XdeT1Dz6j7V19eIcfcSS8Wrv5nl/VMk3z9P09B6dTpw9X2uWCp6KcI+7GK9Ej0mGvTjrX8OFkt1XmfyzEjQAAAAAAAAAAAAAAAAAAAD5qS0pt8k36BiXIsV9KOKk/3dOjBcrqc3bxuiCcsuXbnXnxDV/wDJOP60v+P/ANh7ktP8Zl/H+jawv0oYqL/eU6M13KcH63fyHuy3jnXjzCxZd9KOHnZVqdSm+bVpx9Vv+BvGWFivOpPmNLjl2aUcTHVQqwqL8Mk2vFcV5m8TErVb1tG6yqGOwNTDV/aOL0qepSW9W1Xs3yPL5uPl4+b3Jjtve3pMWfHmxdG++tLwqicdXK1/K1z0/VHT1PP6nelKwOAq4qv7XT2HPU5PcmtV7Lqeaw8bLyM/uTHbe9u9lz48OHoie+luxeYU6K7c0u7n6cT0OTNjx/ul56bRHlDYjayC+pCUvG0V+pSv6nSP2wjnNHwj6m1NZ8FBeTf5lafUss+Ihp70sa2mr9Yf7f6mn9Qzfhj3bNvL9pqkqkYzjFqUkrq6au7XJ8PqF5tFbR5bVyzM6Ww7CwAAAAAAAAAAAAAAAYsVG8JJcXGS+AYnw/NcVZW6FR57w9AAAM2DxdShNTpTlCa4Si7MROm1bTWdxLouy/0jqVqOOSs1b2qW5/5kfzRLF4mNWdDBzdTq/wDq6MqkFT1Jx9np4rfHTblbkb/prX8Oh1b/AFbVfNNpZSvCh2Y+9zfguSORn58z+nH2hXvmmfCvzm5Ntttvi3vfqc2ZmZ3KF4YAD1r4mdDPlyvWpr8cP5kSYf7lf5hmvmHSD1C6AAAAAAAAAAAAAAAAPzlm+GdHEVab3OFSa8lJ2+FirMd3AyRq0w1DDQAAAAFs2I2xngZKlVvLDye9cXTv96Pd1RvW2u0rXH5E451PheM8yuKisRQalSnZ9neknwkn7rOZzeJ0f+SnhfvSP3V8IM5qIAk4ZcqUPa4hWv8AVp/em+/pEtxgjHXry/5R9t+nUbsjqtRyk5Pi+m5eCXQrWt1TuWkztvbP0deJpro7vwir/oWOHTqzVb443aHQD0a2AAAAAAAAAAAAAAAAOPfSxlbpYuNdLsV4q75e0jufm1p9GQZI77crm01fq+1II1JmWFk6bqLfGLtK29wvwclyi+T4XVuIbanW2ENQAAA6B9Ge0dpfsNd3p1LqldXtJ3bpt9Hy7/EkrMTHTK/xM3f27ePhYMRs/V9u6cI9nipO+lRfC8upx78HJ7s1rHb7WZxz1ahuSp0MAt9qta27pF9bcvmTTGHix92bfpp/KBxmLnWm5zd2/RLol0Ofky2yW6rIptMzuWEjYWjYzCfXqtcezH5y/L0Ov6Zj83n+E+GPlaDrJwAAAAAAAAAAAAAAABCbYZEsfhZUvvrtU30mk7eTu0/E1tG4Q58XuU04LWpShJwmnGUW1KL4pp2aZWcSYmJ1LYyvMJ4aoqkLPc1KMt8Zwf1qc1zizMTptS81ncLHV2ZhjqX7Rl29q3tMK32qbfH2cpWvHpf15G/TvvCecMZI6sf+ip1abhJxknGUXZxaaafRpkatMTE6l8hgA9hNxalF2aaaa4pp3TXeGXb8uzqeLyyNelK1RK1Sy3qUd1S3z8zPItf2Zmnl2ceSb4uqPKsN33ve3zPOzO+8oXhgZcLh5VZqEVdyf/1+BvjpN7RWGYjc6dEwWFjRpxpx4RXq+bfiemxY4x0isLkRqNM5IyAAAAAAAAAAAAAAAAAHP/pF2MeIvisNG9VfaQXGotyUor3l8V8Yr033hR5XG6v118uTkLltrLMxq4WqqtGbhOPNcGucZLmn0MxMx4bVvak7q6Hhc8wGcRjSx0FSrqyVRNQTb9yp/wBZfEli1beV+uXFnjWSNSi88+jWvSvLDSVaPKO6NS3yfqjWcc/CPJwrR3r3U3GYOpQloqwlCXuyi4v4kcxMKlqzWdTDAGrof0RZj262Fl9WpH2i8VaM15px9CSneJqv8G/eaNvF0HSqSg/utr9Gedy06LzX6TWjU6Y4Qcmkk23uSXFvoaREzOoYXXZ7J/YR1T+0lx/CvdX5ne4fF9qOq3mVrHTpTJeSAAAAAAAAAAAAAAAAAAAAUnbHYKni9VbD2p1nva4QqPvtwl3+pHam/Cnn4kX718uUZnllXCzdOtTlCS6rc++MuDXgQzEx5cy9LUnVoajMNFiyHbTF4OyjP2lNf4dS8kl+F8V8u42i8wsY+Tkp+V3wu3mAxkFDGUlB9JwVSHippbl4pEvXWfK5HKxXjV4fdbYfLcX2sPU034eyqRlH/a7/AJDorPhmeLhv3rL42f2Dq4DGwrwrQnTWpSTTjPTKLW610+XQxFNTtjFxZx3i0T2bud5bUq4uSpxbuou/BLs23vyOTyuPe+eYrCW9Jm3ZOZNkcMP2n2p9eS7or8y/xuHXF3nvKWmOKpYuJAAAAAAAAAAAAAAAAAAAAAADWx+ApYiDhWhGcXykr+a7zExtralbRqYUvNfovw9R3oVJ0fwv95Hyu7/E0nHHwqX4NJ/b2V3GfRfio/Z1KVRd7lB+jTXxNJxSr24N48S019HOP9yn/wAkTHty0/weVIYD6LsS2nUrU6b/AA6pyXg93zNoxykrwb/M6XzZ3ZyWEXbxVes+kpdheEd/zJK10u4sM08zMp82TgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhdpc4eGilC2ud+PJe94lPmcmcUar5lHkv0x2VmhmGMqXlCVSSXGyuvDgc2ubk271mUMWvPhccjqVJ0IyrfXd77rO13a662sdfj2vOOJv5WKTMx3b5O2AAAAAAjtoK0qeGqSg2pJKzXLtJFflWmuKZjy1vOq7Q2yea1atWUKknJabq9rpppfmU+DyL3vNbTtFivMzqVqOonAAAAAAAAAAAAAAAAADxsxPYc8z7NFipxkouOlW43vvvfgcDlZ4y2iYjWlS9+qW7k+0aw9FU3TcrOTvqS4u/CxNx+bGKnTptTJFY0smY51ChTjOV25pOMVxd1f07zo5eTXHWLT8/Ca14rG0L/bJ3+x3fx7/5Sn/Uv/lH734T+U5pDExvDc19aL4r+neXsGeuWNwlreLR2Y84ziGFS1dqT4RXHxfRGM/Jrhjv5+mL3iqEW2Tv9irfx7/5Sl/Uu/7UfvfhYMrzKGJhqg+HGL4xfeX8OeuWu6pa2i0dmHOM6hhUr9qT4RXG3VvkjTkcmuHz5YteKq7mW03t6M6bp6dVrPVfhJPerLoc/NzoyUmukVsu40+Nin/eJf5cv54Gvp/92f4Yw+V29ouq9Udnqr9rOxzS5r1M9UfZt6nfgImJHxKvBOzlFPpdX9DE3rHbbG4ZDZkAAAAAAAAAAAAABTdssHTpey9nCMb672SV/q8Tj+oY6010xpXyxEa0z7IYGlVozdSnGTU2rtJ7tEdxJwMVL0mbRvuzirEx3Q20tXViZrlC0UuiUV/Up8y28s/jsjyfuWCrk9L9hvoWtU1PVbtatOrjx8i/PGp/h/HfSWaR0IPZSs44qCT3Tun39ltfIpcK01yxH2jxTqzBtBiHUxNRvk3FeEd36+pHyrzbLLF53ZY8xyilHBO0FqjBS1WWq+5tt+p0cvHpHH7R30ltSOhDbI4hwxKiuE00/JOS+RT4F9ZdfaPFOrNPO6zqYio37ziu5J2SIuRab5Za3ndljzjJ6VLBtqC1QUe1zbcldt8+LOhn4+OmDtHeE16RFUTslRVSrUhLhKlNO3GzlBFTg1i15rPzCPFG509xOXQoYuNOd/Ztqzvvs9yd7cn8jW+GMWeKW8E11bU+G3nWChUxsYRvednN9PDyV/Ml5OKLciK1+fLa9d30381wk8PhlTw2uzl2rb5WafTvsWORjtiw9OLbe8TWuqtCjl2FVJOtUtUa3rWm0/4V+ZXrg48U3kn9X8tIrTXdtbG4mT1wbbjGzV+V7ppd24l9NyWnqrM9oZwz5hZjqpwAAAAAAAAAAAAKnt3/AIX+v/qcr1P/ANUGb4bOw/2E/wDMf8kSX07+3P8ALOHwgdqcO4YqbfCdpLzST+NyhzaTGWfyjyxqyWqZ9S/YtCl+8dNQ02fG2lu/Qtzy6exrffWm85I6dIzZLDOeJjJcIJt+aaS+JW4NJtlifppijdmDaLCuniZrlJ6l4S3/AKkfLx9GWWMkasmsfntKeD0KX7yUYxcbPc9ye+1updy8ulsGonvpJbJE1R+x+Gc8Rr5U035tWS+L9CvwMfVk6vprij9W2jndF08TUT95teDd0/iQ8ms0yz/LS8asnM32gpVcLoV9c1G6s7Raab3+Rcz8ul8PTHmUtskTXTT2MmliXd2vCSXe9UXb4Mh9PmIy/wCTXD+5MbYYTVTVVcYOz/hb/X5lr1HFukXj4b5o7bYdl1KtVqV58d0U++2+3kl6kfA3kvbLZjF3mbSybX46UFGnFtarttbm0t2k39RzWrEUr8s5bTHZly7IaEaSlNKbaTbb7O9X3LhY2w8PFWnVbvLNcdYjcorZfGQozm5u2rSlubu7voVOBlpjtbq+UeKYiZXM7iyAAAAAAAAAAAABHZvlEMVp1uS03ta3O173XcV8/Hrm1v4aWpFn3lOWRw0HCDbTd3e3GyXLwNsGCMVdQzWsVjT7zLLqeIjpqLhvTW5p9zM5cNMsasWrFvKE/sdTv9pO3S0b+pT/AKdTflH7MJzL8vhh46aasub4tvq2XMWGuONVSVrFfD4zPLKeJjaouHBrc14MxmwUyxqxasW8odbHU776k7dLRv6lT+nU35R+zCcwGChQhopqy+LfVsu4sVcdemqWtYiNQ1c3ySnibOV4yStqXTo0RZ+LTL3ny1tSLNTBbLUqb1Sbm1ydkvREWPgY6zue7WMUQz4DZ+lQq+0jqbSdk2mlfmjfHxMeO/VDNccRO0bmm0UKlKpTjGV32U2lZq+9lPkc6t6WpEd/DS+SJiYTORYN0aEYv6z3vxe+35eRe4mL28URPlJSNVfeaZZDExSndNcGuK/obZ+PXNGrM2pFo7oinss9ynWk4L7qTXzbSKcenT4tadI/a/LLR2XhGopa5OKaajZcU915dDavp1K36t9mYxRE7T50UoAAAAAAAAAAAAAAAAAAAAAAAAANSOWUVLWqcdV73tz6kMcfFFurp7temPLbJmwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q=="
      alt="logo"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList1 = {
  name: "KFC",
  img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
  cuisines: ["Pizza", "Burger"],
  rating: "4.5",
};

const restaurantList = [
  {
    info: {
      id: "311806",
      name: "Burger King",
      cloudinaryImageId1:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/dfae2b5a-1431-40b4-8fe3-c833ec343dd0_311806.jpg",
      cloudinaryImageId: "12d9ec7c87af4f505f9e3d38f5bcc468.jpg",
      locality: "Ballupur",
      areaName: "Ballupur",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.4,
      parentId: "166",
      avgRatingString: "4.4",
      totalRatingsString: "19K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 6.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-01 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹110",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.6",
          ratingCount: "1.4K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-2be883b4-68f8-4803-a4d0-42301c9ef767",
    },
    cta: {
      link: "https://www.swiggy.com/city/dehradun/burger-king-ballupur-rest311806",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "413821",
      name: "Pizza Hut",
      cloudinaryImageId1:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/76573715-f3bd-47de-9688-199c8c8002bc_413821.JPG",
      cloudinaryImageId: "4a219fbf1b9511ed40dac9b72d1f7d97.jpg",
      locality: "Saharanpur Road",
      areaName: "Majra",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.2,
      parentId: "721",
      avgRatingString: "4.2",
      totalRatingsString: "3.6K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-01 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-2be883b4-68f8-4803-a4d0-42301c9ef767",
    },
    cta: {
      link: "https://www.swiggy.com/city/dehradun/pizza-hut-saharanpur-road-majra-rest413821",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "365569",
      name: "Faasos - Wraps, Rolls & Shawarma",
      cloudinaryImageId1:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/5dff1597-343e-4a44-a242-ae42eb697232_365569.JPG",
      cloudinaryImageId: "9af0529b0adeb54b5298540ef74abb45.jpg",
      locality: "Back Side Area",
      areaName: "Rajpur Road",
      costForTwo: "₹200 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.5,
      parentId: "21809",
      avgRatingString: "4.5",
      totalRatingsString: "5.7K+",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 9.7,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "9.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-30 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-2be883b4-68f8-4803-a4d0-42301c9ef767",
    },
    cta: {
      link: "https://www.swiggy.com/city/dehradun/faasos-wraps-rolls-and-shawarma-back-side-area-rajpur-road-rest365569",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "900538",
      name: "Olio - The Wood Fired Pizzeria",
      cloudinaryImageId1:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/eac18fd4-91b1-4265-b3ec-86cf9a58d8ce_900538.JPG",
      cloudinaryImageId: "7acac3fa2904e887eefdd4525493b576.jpg",
      locality: "Race Course",
      areaName: "Subhash Road",
      costForTwo: "₹300 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Fast Food",
        "Snacks",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.2,
      parentId: "11633",
      avgRatingString: "4.2",
      totalRatingsString: "1.2K+",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 7.2,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "7.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-01 06:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "65% OFF",
        subHeader: "UPTO ₹135",
        headerTypeV2: 12,
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.5",
          ratingCount: "30",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-2be883b4-68f8-4803-a4d0-42301c9ef767",
    },
    cta: {
      link: "https://www.swiggy.com/city/dehradun/olio-the-wood-fired-pizzeria-race-course-subhash-road-rest900538",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "253768",
      name: "McDonald's",
      cloudinaryImageId1:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/f05426f2-a35c-4c16-b0be-c7a3bb8e7d79_253768.JPG",
      cloudinaryImageId: "4f861d12ca8fbbe137b0288c21b60b16.jpg",
      locality: "Rajpur Road",
      areaName: "Karanpur",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4.5,
      parentId: "630",
      avgRatingString: "4.5",
      totalRatingsString: "21K+",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 7.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "7.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-01 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹91",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "9.4K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-2be883b4-68f8-4803-a4d0-42301c9ef767",
    },
    cta: {
      link: "https://www.swiggy.com/city/dehradun/mcdonalds-rajpur-road-karanpur-rest253768",
      type: "WEBLINK",
    },
  },
];

const RestaurantCard = ({
  name,
  cuisines,
  avgRatingString,
  cloudinaryImageId,
}) => {
  // console.log(props)
  // const {name,cuisines,avgRatingString,cloudinaryImageId} = restaurant.info;

  return (
    <div className="card">
      <img
        className="res-card"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1687640534/" +
          cloudinaryImageId
        }
        alt="kfc img"
      />

      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRatingString} Star</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />;
      })}
    </div>
  );
};
const Footer = () => {
  return <h1>Footer</h1>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
