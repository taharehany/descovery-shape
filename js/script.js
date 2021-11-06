function setLinks(jsonPhones) {
	if($('body').attr('class').toLowerCase() !== "airpadpro") {
		var phoneName = $('body').attr('class').toLowerCase().replace(/\s/g, '');
		$('#divParentTableOfLinks').empty();

		var storageName = "_" + $('.getgb.active-bdrcolor').text().toLowerCase().replace(/\s/g, '');
		var colorName = jQuery(".active-color").attr('colorName').toLowerCase().replace(/\s/g, '');

		var arrayOfLinks = jsonPhones[0][phoneName][storageName][colorName];
		var tableOfLinks = '<table width="80%" border="0" cellspacing="0" cellpadding="0"><tbody>';
		for(i=0; i<arrayOfLinks.length; i++){
		    if(arrayOfLinks[i].link != "NA"){
			    var trOfReseller = '<tr>';
			    
			    var tdOfReseller = '<td width="50%">';
			    tdOfReseller += arrayOfLinks[i].reseller;
			    tdOfReseller += '</td>';
			    
			    var tdOfLink = '<td class="contact" width="50%"> ';
			    if((arrayOfLinks[i].link).indexOf("whatsapp") != -1) {
			    	tdOfLink += '<a href=' + arrayOfLinks[i].link + ' target="_blank">Chat Now</a>';
				} else {
					tdOfLink += '<a href=' + arrayOfLinks[i].link + ' target="_blank">Check Offers</a>';
				}
			    tdOfLink += '</td>';
			    
				trOfReseller = trOfReseller + tdOfReseller + tdOfLink + '</tr>';

				tableOfLinks += trOfReseller;
			}
		}

		tableOfLinks += "</tbody></table>";

		$('#divParentTableOfLinks').append(tableOfLinks);
	}
}

jQuery(document).ready(function(){

	var jsonPhones = [
  {
    "iphone11pro": {
      "_64gb": {
        "gold": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-pro-64gb-gold/p/1630033"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-pro-with-facetime-gold-64gb-4g-lte-ksa-specs/N29885959A/p?o=a86e5633de65fcab"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D9%88-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3LRWSD/ref=sr_1_1?keywords=apple+iphone+11+pro+64+gold&qid=1592901943&s=electronics&sr=1-1"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-pro-64gb-phone-gold.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/phones-accessories/mobile-phones/iphone-11-pro-64gb-gold/p/000000006021750003"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "https://hazmi.online/products/iphone-11-pro?_pos=2&_sid=b1298c1ff&_ss=r"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "spacegray": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-pro-64gb-space-grey/p/1630030"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-pro-with-facetime-silver-64gb-4g-lte-ksa-specs/N29885961A/p?o=f757e68b4fabccae"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/Apple-iPhone-11-Pro-FaceTime/dp/B07Y7GRGSF/ref=sr_1_28?crid=26MIJ7BA5DG30&keywords=apple+iphone+11+pro&qid=1592901825&rnid=12463163031&s=electronics&sprefix=apple+iphone+11%2Celectronics%2C241&sr=1-28"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/phones-accessories/mobile-phones/iphone-11-pro-64gb-space-grey/p/000000006021750001"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "https://alrasail.com.sa/product/%d9%87%d8%a7%d8%aa%d9%81-%d8%a7%d8%a8%d9%84-%d8%a7%d9%8a%d9%81%d9%88%d9%86-11-%d8%a8%d8%b1%d9%88-%d8%b0%d8%a7%d9%83%d8%b1%d8%a9-%d9%88%d8%b5%d9%88%d9%84-%d8%b9%d8%b4%d9%88%d8%a7%d8%a6%d9%8a%d8%a9-4/"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "silver": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-pro-with-facetime-silver-64gb-4g-lte-ksa-specs/N29885961A/p?o=f757e68b4fabccae"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/Apple-iPhone-11-Pro-FaceTime/dp/B07Y7HLVW3/ref=sr_1_25?crid=26MIJ7BA5DG30&keywords=apple+iphone+11+pro&qid=1592901825&rnid=12463163031&s=electronics&sprefix=apple+iphone+11%2Celectronics%2C241&sr=1-25"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-pro-64gb-phone-silver.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/phones-accessories/mobile-phones/iphone-11-pro-max-64gb-silver/p/000000006021747002"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "https://hazmi.online/products/iphone-11-pro?variant=30310708707465"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "midnightgreen": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-pro-64gb-midnight-green/p/1630034"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-pro-with-facetime-midnight-green-64gb-4g-lte-ksa-specs/N29885962A/p?o=aa8d2775b79c8b5d"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/Apple-iPhone-Pro-FaceTime-Dual/dp/B07Z2ZQ3FR/ref=sr_1_8?keywords=Apple+iPhone+11&qid=1592901111&s=electronics&sr=1-8"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-pro-64gb-phone-midnight-green.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "https://najdtelecom.com/products/eeb95826-6dca-4354-a245-3d10b62669aa"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "https://hazmi.online/products/iphone-11-pro?variant=30310708740233"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ]
      },
      "_256gb": {
        "gold": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-pro-256gb-gold/p/1630037"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "#"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/phones-accessories/mobile-phones/iphone-11-pro-256gb-gold/p/000000006021921003"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "spacegray": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-pro-without-facetime-space-gray-256gb-4g-lte/N29897583A/p?o=dff3b9f3296e902d"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D9%88-%D9%81%D9%8A%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85/dp/B08575NHKY/ref=sr_1_6?keywords=Apple+iPhone+11&qid=1592901111&s=electronics&sr=1-6"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-pro-256gb-phone-space-grey.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/phones-accessories/mobile-phones/iphone-11-pro-256gb-space-grey/p/000000006022358001"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "silver": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-pro-256gb-silver/p/1630036"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "NA"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-pro-256gb-phone-silver.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/phones-accessories/mobile-phones/iphone-11-pro-256gb-silver/p/000000006021921002"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "midnightgreen": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-pro-256gb-midnight-green/p/1630038"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-pro-with-facetime-midnight-green-256gb-4g-lte-ksa-specs/N29885966A/p?o=c9f7e150a02249ad"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D9%88-%D9%81%D9%8A%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85/dp/B07Y3K3RGT/ref=sr_1_1?keywords=Apple+iPhone+11&qid=1592901111&s=electronics&sr=1-1"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-pro-256gb-phone-midnight-green.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/apple/iphone/iphone-11-pro-256gb-midnight-green/p/000000006021921004"
          },
          {
            "reseller": "Najd Telecom",
            "link": "https://najdtelecom.com/products/8f0ee1c1-c96a-44fd-83ea-08944115316f"
          },
          {
            "reseller": "Al Raseil",
            "link": "https://alrasail.com.sa/product/%d9%87%d8%a7%d8%aa%d9%81-%d8%a7%d8%a8%d9%84-%d8%a7%d9%8a%d9%81%d9%88%d9%86-11-%d8%a8%d8%b1%d9%88-%d8%b0%d8%a7%d9%83%d8%b1%d8%a9-%d9%88%d8%b5%d9%88%d9%84-%d8%b9%d8%b4%d9%88%d8%a7%d8%a6%d9%8a%d8%a9-4/"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "https://hazmi.online/products/iphone-11-pro?variant=30310708904073"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ]
      },
      "_512gb": {
        "gold": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-pro-with-facetime-gold-512gb-4g-lte-ksa-specs/N29885967A/p?o=bd08b65fa5decc5a"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%85%D8%A7%D9%83%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3KXK2K/ref=sr_1_1?keywords=apple+iphone+11+pro+512+gold&qid=1592902024&s=electronics&sr=1-1"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-pro-512gb-phone-gold.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/phones-accessories/mobile-phones/iphone-11-pro-512gb-gold/p/000000006021922003"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "spacegray": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-pro-with-facetime-space-gray-512gb-4g-lte-ksa-specs/N29885968A/p?o=a5ffb8bd12007ffc"
          },
          {
            "reseller": "Amazon",
            "link": "NA"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "silver": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "NA"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-pro-512gb-phone-silver.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "midnightgreen": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-pro-with-facetime-midnight-green-512gb-4g-lte-ksa-specs/N29885970A/p?o=ab2ff0da6287251b"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D9%88-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3LGHSW/ref=sr_1_1?keywords=apple%2Biphone%2B11%2Bpro%2B64%2Bgold&qid=1592901943&s=electronics&sr=1-1&th=1"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/apple/iphone/iphone-11-pro-512gb-midnight-green/p/000000006021922004"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ]
      }
    },
    "iphone11promax": {
      "_64gb": {
        "gold": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-pro-max-64gb-gold/p/1630045"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-pro-max-with-facetime-gold-64gb-4g-lte-ksa-specs/N29885971A/p?o=c89c770ed684497b"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%85%D8%A7%D9%83%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3L9NMF/ref=sr_1_1?keywords=apple%2Biphone%2B11%2Bpro%2B512%2Bgold&qid=1592902024&s=electronics&sr=1-1&th=1"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-pro-max-64gb-phone-gold.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/phones-accessories/mobile-phones/iphone-11-pro-max-64gb-gold/p/000000006021747003"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "https://hazmi.online/products/iphone-11-pro-max?variant=30310716997769"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "spacegray": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-pro-max-64gb-space-grey/p/1630043"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-pro-max-with-facetime-space-gray-64gb-4g-lte-ksa-specs/N29885972A/p?o=cc0d00dc06c3feaa"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%85%D8%A7%D9%83%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3L7KLQ/ref=sr_1_1?keywords=apple%2Biphone%2B11%2Bpro%2B512%2Bgold&qid=1592902024&s=electronics&sr=1-1&th=1"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-pro-64gb-phone-space-grey.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/apple/iphone/iphone-11-pro-max-64gb-space-grey/p/000000006021747001"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "silver": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-pro-max-64gb-silver/p/1630044"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/Apple-iPhone-Pro-FaceTime-SIM/dp/B07Y3L5GCM/ref=sr_1_3?keywords=Apple+iPhone+11&qid=1592901111&s=electronics&sr=1-3"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-pro-max-64gb-phone-silver.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "https://alrasail.com.sa/product/%d9%87%d8%a7%d8%aa%d9%81-%d8%a7%d8%a8%d9%84-%d8%a7%d9%8a%d9%81%d9%88%d9%86-11-%d8%a8%d8%b1%d9%88-%d9%85%d8%a7%d9%83%d8%b3-%d8%8c-%d8%b0%d8%a7%d9%83%d8%b1%d8%a9-%d9%88%d8%b5%d9%88%d9%84-%d8%b9%d8%b4/"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "https://hazmi.online/products/iphone-11-pro-max?variant=30310716965001"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "midnightgreen": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-pro-max-64gb-midnight-green/p/1630046"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%85%D8%A7%D9%83%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3L4N22/ref=sr_1_1?keywords=apple%2Biphone%2B11%2Bpro%2B512%2Bgold&qid=1592902024&s=electronics&sr=1-1&th=1"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-pro-max-64gb-phone-midnight-green.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/apple/iphone/iphone-11-pro-max-64gb-midnight-green/p/000000006021747004"
          },
          {
            "reseller": "Najd Telecom",
            "link": "https://najdtelecom.com/products/9e8fd8ae-f99a-4915-a5e5-91af67520209"
          },
          {
            "reseller": "Al Raseil",
            "link": "https://alrasail.com.sa/product/%d9%87%d8%a7%d8%aa%d9%81-%d8%a7%d8%a8%d9%84-%d8%a7%d9%8a%d9%81%d9%88%d9%86-11-%d8%a8%d8%b1%d9%88-%d9%85%d8%a7%d9%83%d8%b3-%d8%8c-%d8%b0%d8%a7%d9%83%d8%b1%d8%a9-%d9%88%d8%b5%d9%88%d9%84-%d8%b9%d8%b4/"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "https://hazmi.online/products/iphone-11-pro-max?variant=30310716866697"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ]
      },
      "_256gb": {
        "gold": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%85%D8%A7%D9%83%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3L8VHQ/ref=sr_1_1?keywords=apple%2Biphone%2B11%2Bpro%2B512%2Bgold&qid=1592902024&s=electronics&sr=1-1&th=1"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-pro-max-256gb-phone-gold.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/phones-accessories/mobile-phones/iphone-11-pro-max-256gb-gold/p/000000006021748003"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "https://alrasail.com.sa/product/%d9%87%d8%a7%d8%aa%d9%81-%d8%a7%d8%a8%d9%84-%d8%a7%d9%8a%d9%81%d9%88%d9%86-11-%d8%a8%d8%b1%d9%88-%d9%85%d8%a7%d9%83%d8%b3-%d8%8c-%d8%b0%d8%a7%d9%83%d8%b1%d8%a9-%d9%88%d8%b5%d9%88%d9%84-%d8%b9%d8%b4/"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "spacegray": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-pro-max-256gb-space-grey/p/1630047"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-pro-max-with-facetime-space-gray-256gb-4g-lte-ksa-specs/N29885976A/p?o=fa836ebbd899227f"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%85%D8%A7%D9%83%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07XRNTT5C/ref=sr_1_1?keywords=apple%2Biphone%2B11%2Bpro%2B512%2Bgold&qid=1592902024&s=electronics&sr=1-1&th=1"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-pro-max-256gb-phone-space-grey.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/phones-accessories/mobile-phones/iphone-11-pro-max-256gb-space-grey/p/000000006021748001"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "silver": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-pro-max-256gb-silver/p/1630048"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "NA"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/phones-accessories/mobile-phones/iphone-11-pro-max-256gb-silver/p/000000006021748002"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "midnightgreen": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-pro-max-256gb-midnight-green/p/1630050"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-pro-max-with-facetime-midnight-green-256gb-4g-lte-ksa-specs/N29885978A/p?o=ea78626ff141930c"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%85%D8%A7%D9%83%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3L591B/ref=sr_1_1?keywords=apple%2Biphone%2B11%2Bpro%2B512%2Bgold&qid=1592902024&s=electronics&sr=1-1&th=1"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/apple/iphone/iphone-11-pro-max-256gb-midnight-green/p/000000006021748004"
          },
          {
            "reseller": "Najd Telecom",
            "link": "https://najdtelecom.com/products/ed33ad6c-f555-47f4-9075-da1d718fa2df"
          },
          {
            "reseller": "Al Raseil",
            "link": "https://alrasail.com.sa/product/%d9%87%d8%a7%d8%aa%d9%81-%d8%a7%d8%a8%d9%84-%d8%a7%d9%8a%d9%81%d9%88%d9%86-11-%d8%a8%d8%b1%d9%88-%d9%85%d8%a7%d9%83%d8%b3-%d8%8c-%d8%b0%d8%a7%d9%83%d8%b1%d8%a9-%d9%88%d8%b5%d9%88%d9%84-%d8%b9%d8%b4/"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "https://hazmi.online/products/iphone-11-pro-max?variant=30310717161609"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ]
      },
      "_512gb": {
        "gold": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-pro-max-with-facetime-gold-512gb-4g-lte-ksa-specs/N29885979A/p?o=a0c38b53b1b2e51c"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%85%D8%A7%D9%83%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3KXK2K/ref=sr_1_1?keywords=apple%2Biphone%2B11%2Bpro%2B512%2Bgold&qid=1592902024&s=electronics&sr=1-1&th=1"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-pro-max-512gb-phone-gold.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/phones-accessories/mobile-phones/iphone-11-pro-max-512gb-gold/p/000000006021749003"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "spacegray": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-pro-max-with-facetime-space-gray-512gb-4g-lte-ksa-specs/N29885980A/p?o=fe3fc2cb8bcae4ef"
          },
          {
            "reseller": "Amazon",
            "link": "NA"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/phones-accessories/mobile-phones/iphone-11-pro-max-512gb-space-grey/p/000000006021749001"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "silver": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "NA"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/apple/iphone/iphone-11-pro-max-512gb-silver/p/000000006021749002"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "midnightgreen": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-pro-max-dual-sim-with-facetime-midnight-green-512gb-4g-lte-hk-specs/N29898028A/p?o=a51f359e344149ce"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/Apple-iPhone-Pro-FaceTime-SIM/dp/B07Y3KPSZ8/ref=sr_1_5?keywords=Apple+iPhone+11&qid=1592901111&s=electronics&sr=1-5"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/phones-accessories/mobile-phones/iphone-11-pro-max-512gb-midnight-green/p/000000006021749004"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ]
      }
    },
    "iphone11": {
      "_64gb": {
        "black": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-64gb-black/p/1630001"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-with-facetime-black-64gb-4g-lte-international-specs/N29884709A/p?o=fb40871273ee215e"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%81%D9%8A%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3L4N12/ref=sr_1_2?keywords=Apple+iPhone+11&qid=1592901111&s=electronics&sr=1-2"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-64gb-phone-black.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "https://najdtelecom.com/products/f2721eae-2feb-4554-86e0-a11152efb0b7"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "https://hazmi.online/collections/smartphones/products/%D8%A7%D9%8A%D9%81%D9%88%D9%86-11?variant=30310702907529"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "white": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-64gb-white/p/1630002"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-with-facetime-white-64gb-4g-lte-ksa-specs/N29885946A/p?o=b12ea97f5cc39d7e"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%81%D9%8A%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3LHBX1/ref=sr_1_2?keywords=apple%2Biphone%2B11&qid=1592902767&s=electronics&sr=1-2&th=1"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-64gb-phone-white.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "https://najdtelecom.com/products/1e4d61e2-a122-42e8-a579-cc7e0f43c17c"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "https://hazmi.online/collections/smartphones/products/%D8%A7%D9%8A%D9%81%D9%88%D9%86-11?variant=30310702841993"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "purple": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-64gb-purple/p/1630005"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-with-facetime-purple-64gb-4g-lte-ksa-specs/N29885944A/p?o=c94bd6bb482b011d"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%81%D9%8A%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3KQ1XV/ref=sr_1_2?keywords=apple%2Biphone%2B11&qid=1592902767&s=electronics&sr=1-2&th=1"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-64gb-phone-purple.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "https://najdtelecom.com/products/2e9e9cc1-4af0-4cce-8cbf-3e76fb9c92d0"
          },
          {
            "reseller": "Al Raseil",
            "link": "https://alrasail.com.sa/product/%d9%87%d8%a7%d8%aa%d9%81-%d8%a7%d8%a8%d9%84-%d8%a7%d9%8a%d9%81%d9%88%d9%86-11-%d8%b0%d8%a7%d9%83%d8%b1%d8%a9-%d9%88%d8%b5%d9%88%d9%84-%d8%b9%d8%b4%d9%88%d8%a7%d8%a6%d9%8a%d8%a9-4-%d8%ac%d9%8a%d8%ac/"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "https://hazmi.online/collections/smartphones/products/%D8%A7%D9%8A%D9%81%D9%88%D9%86-11?variant=30310701498505"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "yellow": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-64gb-yellow/p/1630004"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-with-facetime-yellow-64gb-4g-lte-ksa-specs/N29885943A/p?o=cad8fe76d5ad26cc"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%81%D9%8A%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3KD142/ref=sr_1_2?keywords=apple%2Biphone%2B11&qid=1592902767&s=electronics&sr=1-2&th=1"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-64gb-phone-yellow.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/phones-accessories/mobile-phones/iphone-11-64gb-yellow/p/000000006022360004"
          },
          {
            "reseller": "Najd Telecom",
            "link": "https://najdtelecom.com/products/ae73ceb3-fb82-48df-a2da-9c7e08dd543e"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "https://hazmi.online/collections/smartphones/products/%D8%A7%D9%8A%D9%81%D9%88%D9%86-11?variant=30310702776457"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "red": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-64gb-product-red-/p/1630003"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-with-facetime-product-red-64gb-4g-lte-ksa-specs/N29885945A/p?o=b5e01c47d09aa52d"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%81%D9%8A%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3LHJG6/ref=sr_1_2?keywords=apple%2Biphone%2B11&qid=1592902767&s=electronics&sr=1-2&th=1"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-64gb-phone-red.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "https://najdtelecom.com/products/421848b7-93f8-442c-a2d1-f583a234dc21"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "https://hazmi.online/collections/smartphones/products/%D8%A7%D9%8A%D9%81%D9%88%D9%86-11?variant=30310702874761"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "green": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-64gb-green/p/1630006"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-with-facetime-green-64gb-4g-lte-ksa-specs/N29885942A/p?o=ecde62bfe739c78b"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%81%D9%8A%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3KGRL2/ref=sr_1_2?keywords=apple%2Biphone%2B11&qid=1592902767&s=electronics&sr=1-2&th=1"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "https://najdtelecom.com/products/6026045e-10c5-4cc9-8c49-51fe04d7bc9a"
          },
          {
            "reseller": "Al Raseil",
            "link": "https://alrasail.com.sa/product/%d9%87%d8%a7%d8%aa%d9%81-%d8%a7%d8%a8%d9%84-%d8%a7%d9%8a%d9%81%d9%88%d9%86-11-%d8%b0%d8%a7%d9%83%d8%b1%d8%a9-%d9%88%d8%b5%d9%88%d9%84-%d8%b9%d8%b4%d9%88%d8%a7%d8%a6%d9%8a%d8%a9-4-%d8%ac%d9%8a%d8%ac/"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "https://hazmi.online/collections/smartphones/products/%D8%A7%D9%8A%D9%81%D9%88%D9%86-11?variant=30310702809225"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ]
      },
      "_256gb": {
        "red": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-256gb-product-red-/p/1630025"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-with-facetime-product-red-256gb-4g-lte-ksa-specs/N29885957A/p?o=e1b29caf2364312c"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%81%D9%8A%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3LNH6B/ref=sr_1_2?keywords=apple%2Biphone%2B11&qid=1592902767&s=electronics&sr=1-2&th=1"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "https://najdtelecom.com/products/f2721eae-2feb-4554-86e0-a11152efb0b7"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "spacegray": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "NA"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "yellow": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "NA"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "https://najdtelecom.com/products/89fb8ff8-b293-418a-9b8e-7dfc9fd974a4"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "purple": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "NA"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-256gb-phone-purple.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "https://alrasail.com.sa/product/%d9%87%d8%a7%d8%aa%d9%81-%d8%a7%d8%a8%d9%84-%d8%a7%d9%8a%d9%81%d9%88%d9%86-11-%d8%b0%d8%a7%d9%83%d8%b1%d8%a9-%d9%88%d8%b5%d9%88%d9%84-%d8%b9%d8%b4%d9%88%d8%a7%d8%a6%d9%8a%d8%a9-4-%d8%ac%d9%8a%d8%ac/"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "https://hazmi.online/collections/smartphones/products/%D8%A7%D9%8A%D9%81%D9%88%D9%86-11?variant=30310703136905"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "black": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-with-facetime-black-256gb-4g-lte-ksa-specs/N29885953A/p?o=a8111ee87a65b74c"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%81%D9%8A%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3LG8Y3/ref=sr_1_2?keywords=apple%2Biphone%2B11&qid=1592902767&s=electronics&sr=1-2&th=1"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-256gb-phone-black.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "https://najdtelecom.com/products/b3424fbe-a7f1-461c-90bc-1023140fe9eb"
          },
          {
            "reseller": "Al Raseil",
            "link": "https://alrasail.com.sa/product/%d9%87%d8%a7%d8%aa%d9%81-%d8%a7%d8%a8%d9%84-%d8%a7%d9%8a%d9%81%d9%88%d9%86-11-%d8%b0%d8%a7%d9%83%d8%b1%d8%a9-%d9%88%d8%b5%d9%88%d9%84-%d8%b9%d8%b4%d9%88%d8%a7%d8%a6%d9%8a%d8%a9-4-%d8%ac%d9%8a%d8%ac/"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "https://hazmi.online/collections/smartphones/products/%D8%A7%D9%8A%D9%81%D9%88%D9%86-11?variant=30310703300745"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "white": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-with-facetime-white-256gb-4g-lte-ksa-specs/N29885958A/p?o=a834441525ce9c3e"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%81%D9%8A%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3LHBXF/ref=sr_1_2?keywords=apple%2Biphone%2B11&qid=1592902767&s=electronics&sr=1-2&th=1"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-256gb-phone-white.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "https://najdtelecom.com/products/b414f80b-7ca8-420c-b54a-f8e68a0106d6"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "https://hazmi.online/collections/smartphones/products/%D8%A7%D9%8A%D9%81%D9%88%D9%86-11?variant=30310703235209"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "silver": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "NA"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "green": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%81%D9%8A%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3L9NLS/ref=sr_1_2?keywords=apple%2Biphone%2B11&qid=1592902767&s=electronics&sr=1-2&th=1"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/phones-accessories/mobile-phones/iphone-11-256gb-green/p/000000006021925006"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ]
      },
      "_128gb": {
        "yellow": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-128gb-yellow/p/1630010"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "NA"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-128gb-phone-yellow.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/phones-accessories/mobile-phones/iphone-11-128gb-yellow/p/000000006021924004"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "https://hazmi.online/collections/smartphones/products/%D8%A7%D9%8A%D9%81%D9%88%D9%86-11?variant=30310702973065"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "purple": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-128gb-purple/p/1630021"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%81%D9%8A%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3LC4V2/ref=sr_1_1?keywords=Apple%2BiPhone%2B11&qid=1593079233&s=electronics&sr=1-1&th=1"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-128gb-phone-purple.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "Nhttps://najdtelecom.com/products/c6cd3787-5ae4-4f7d-8044-aef01b95871e"
          },
          {
            "reseller": "Al Raseil",
            "link": "https://alrasail.com.sa/product/%d9%87%d8%a7%d8%aa%d9%81-%d8%a7%d8%a8%d9%84-%d8%a7%d9%8a%d9%81%d9%88%d9%86-11-%d8%b0%d8%a7%d9%83%d8%b1%d8%a9-%d9%88%d8%b5%d9%88%d9%84-%d8%b9%d8%b4%d9%88%d8%a7%d8%a6%d9%8a%d8%a9-4-%d8%ac%d9%8a%d8%ac/"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "https://hazmi.online/collections/smartphones/products/%D8%A7%D9%8A%D9%81%D9%88%D9%86-11?variant=30310702940297"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "white": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-with-facetime-white-128gb-4g-lte-ksa-specs/N29885952A/p?o=eb855fd78909acaa"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%81%D9%8A%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3L5KWP/ref=sr_1_1?keywords=Apple%2BiPhone%2B11&qid=1593079233&s=electronics&sr=1-1&th=1"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-128gb-phone-white.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "https://najdtelecom.com/products/9ad90a8e-9902-4b63-93e9-2a7dfb2e020c"
          },
          {
            "reseller": "Al Raseil",
            "link": "https://alrasail.com.sa/product/%d9%87%d8%a7%d8%aa%d9%81-%d8%a7%d8%a8%d9%84-%d8%a7%d9%8a%d9%81%d9%88%d9%86-11-%d8%b0%d8%a7%d9%83%d8%b1%d8%a9-%d9%88%d8%b5%d9%88%d9%84-%d8%b9%d8%b4%d9%88%d8%a7%d8%a6%d9%8a%d8%a9-4-%d8%ac%d9%8a%d8%ac/"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "https://hazmi.online/collections/smartphones/products/%D8%A7%D9%8A%D9%81%D9%88%D9%86-11?variant=30310703038601"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "red": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-128gb-product-red-/p/1630009"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%81%D9%8A%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3LNH62/ref=sr_1_1?keywords=Apple%2BiPhone%2B11&qid=1593079233&s=electronics&sr=1-1&th=1"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-128gb-phone-red.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/phones-accessories/mobile-phones/iphone-11-128gb-red/p/000000006021924003"
          },
          {
            "reseller": "Najd Telecom",
            "link": "https://najdtelecom.com/products/2239e1bd-97ab-4e66-aed5-4423a0a0ae68"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "black": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-128gb-black/p/1630007"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-with-facetime-black-128gb-4g-lte-ksa-specs/N29885947A/p?o=f44aea2a80112c8c"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%81%D9%8A%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3LNH5Q/ref=sr_1_1?keywords=Apple%2BiPhone%2B11&qid=1593079233&s=electronics&sr=1-1&th=1"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-128gb-phone-black.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/apple/iphone/iphone-11-128gb-black/p/000000006021924001"
          },
          {
            "reseller": "Najd Telecom",
            "link": "https://najdtelecom.com/products/861d56ce-bcfa-41e9-be5a-cb93b06c23ad"
          },
          {
            "reseller": "Al Raseil",
            "link": "https://alrasail.com.sa/product/%d9%87%d8%a7%d8%aa%d9%81-%d8%a7%d8%a8%d9%84-%d8%a7%d9%8a%d9%81%d9%88%d9%86-11-%d8%b0%d8%a7%d9%83%d8%b1%d8%a9-%d9%88%d8%b5%d9%88%d9%84-%d8%b9%d8%b4%d9%88%d8%a7%d8%a6%d9%8a%d8%a9-4-%d8%ac%d9%8a%d8%ac/"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "green": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-11-128gb-green/p/1630022"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-11-with-facetime-green-128gb-4g-lte-ksa-specs/N29885948A/p?o=e03e32ce38823e1b"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%81%D9%8A%D8%B3-%D8%AA%D8%A7%D9%8A%D9%85-SIM/dp/B07Y3KGRL8/ref=sr_1_1?keywords=Apple%2BiPhone%2B11&qid=1593079233&s=electronics&sr=1-1&th=1"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-11-128gb-phone-green.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/electronics-accessories/phones-accessories/mobile-phones/iphone-11-128gb-green/p/000000006022411006"
          },
          {
            "reseller": "Najd Telecom",
            "link": "https://najdtelecom.com/products/fe7fc385-dee2-4784-a43e-46f624b261f7"
          },
          {
            "reseller": "Al Raseil",
            "link": "https://alrasail.com.sa/product/%d9%87%d8%a7%d8%aa%d9%81-%d8%a7%d8%a8%d9%84-%d8%a7%d9%8a%d9%81%d9%88%d9%86-11-%d8%b0%d8%a7%d9%83%d8%b1%d8%a9-%d9%88%d8%b5%d9%88%d9%84-%d8%b9%d8%b4%d9%88%d8%a7%d8%a6%d9%8a%d8%a9-4-%d8%ac%d9%8a%d8%ac/"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "https://hazmi.online/collections/smartphones/products/%D8%A7%D9%8A%D9%81%D9%88%D9%86-11?variant=30310703235209"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ]
      }
    },
    "iphonese": {
      "_64gb": {
        "white": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-se-generation-ii-64gb-white/p/1703554"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/Apple-MXVT2AH-A-iPhone-White/dp/B0879V94ZQ/ref=sr_1_14?crid=1SPHVHC5000MG&keywords=apple+iphone+se+2020&qid=1592901180&s=electronics&sprefix=Apple+iPhone+SE+%2Celectronics%2C323&sr=1-14"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-se-64gb-phone-white.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "https://najdtelecom.com/products/eb2a4a23-919b-4a65-b689-fd5b577fa5f2"
          },
          {
            "reseller": "Al Raseil",
            "link": "https://alrasail.com.sa/product/%d9%87%d8%a7%d8%aa%d9%81-%d8%a7%d9%8a%d9%81%d9%88%d9%86-se2-%d9%85%d9%88%d8%af%d9%8a%d9%84-2020-%d8%a7%d9%84%d8%ac%d9%8a%d9%84-%d8%a7%d9%84%d8%b1%d8%a7%d8%a8%d8%b9-%d8%a7%d9%84-%d8%aa%d9%8a-%d8%a7/"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "red": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D8%A7%D8%B3-128-%D8%AC%D9%8A%D8%AC%D8%A7-%D8%A7%D8%B3%D9%88%D8%AF/dp/B0879VJYMT/ref=sr_1_4?crid=1SPHVHC5000MG&keywords=apple+iphone+se+2020&qid=1592901180&s=electronics&sprefix=Apple+iPhone+SE+%2Celectronics%2C323&sr=1-4"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-se-64gb-phone-red.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "https://www.virginmegastore.sa/en/telephony/smart-phones/iphone-se-64gb-product-red/p/000000006025767002"
          },
          {
            "reseller": "Najd Telecom",
            "link": "https://najdtelecom.com/products/875ddcb3-ff42-4b67-a5f8-937094b33d02"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "black": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-se-2020-2nd-gen-with-facetime-black-3gb-ram-64gb-4g-lte/N37744183A/p?o=f172ca6259b5613c"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/Apple-MX9R2AH-A-iPhone-Black/dp/B0879VXRWW/ref=sr_1_10?crid=1SPHVHC5000MG&keywords=apple+iphone+se+2020&qid=1592901180&s=electronics&sprefix=Apple+iPhone+SE+%2Celectronics%2C323&sr=1-10"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-se-64gb-phone-black.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "https://najdtelecom.com/products/683843ec-b393-43fe-a7e6-8f60789fd5d2"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "https://hazmi.online/products/iphone-se?_pos=1&_sid=af0cc5064&_ss=r"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "spacegray": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "NA"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "silver": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "NA"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "midnightgreen": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "NA"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ]
      },
      "_256gb": {
        "gold": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "NA"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "black": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/Apple-iPhone-256GB-LTE-Black/dp/B0879W2K1J/ref=sr_1_2?crid=1SPHVHC5000MG&keywords=apple+iphone+se+2020&qid=1592901180&s=electronics&sprefix=Apple+iPhone+SE+%2Celectronics%2C323&sr=1-2"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "red": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/iPhone-SE-256GB-PRODUCT-RED/dp/B0879VWQMW/ref=sr_1_5?crid=1SPHVHC5000MG&keywords=apple+iphone+se+2020&qid=1592901180&s=electronics&sprefix=Apple+iPhone+SE+%2Celectronics%2C323&sr=1-5"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "spacegray": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "NA"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "white": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/Apple-MXD22AH-A-iPhone-256GB/dp/B0879W1HFP/ref=sr_1_26?crid=1SPHVHC5000MG&keywords=apple+iphone+se+2020&qid=1592901180&s=electronics&sprefix=Apple+iPhone+SE+%2Celectronics%2C323&sr=1-26"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "silver": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "NA"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "midnightgreen": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "NA"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ]
      },
      "_128gb": {
        "white": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-se-generation-ii-128gb-white/p/1703559"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/Apple-iPhone-SE-Single-SIM/dp/B0879W31DL/ref=sr_1_6?keywords=Apple+iPhone+SE&qid=1593079331&s=electronics&sr=1-6"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-se-128gb-phone-white.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "https://najdtelecom.com/products/f009bb95-1592-4026-bc66-cc66c00042df"
          },
          {
            "reseller": "Al Raseil",
            "link": "https://alrasail.com.sa/product/%d9%87%d8%a7%d8%aa%d9%81-%d8%a7%d9%8a%d9%81%d9%88%d9%86-se2-%d9%85%d9%88%d8%af%d9%8a%d9%84-2020-%d8%a7%d9%84%d8%ac%d9%8a%d9%84-%d8%a7%d9%84%d8%b1%d8%a7%d8%a8%d8%b9-%d8%a7%d9%84-%d8%aa%d9%8a-%d8%a7/"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "red": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "https://www.amazon.sa/-/en/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D8%A7%D8%B3-%D8%A7%D9%8A-%D8%A7%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9/dp/B0879VX3PT/ref=sr_1_30?keywords=Apple+iPhone+SE&qid=1593079331&s=electronics&sr=1-30"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-se-128gb-phone-red.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "black": [
          {
            "reseller": "Lulu",
            "link": "https://www.luluhypermarket.com/en-sa/apple-iphone-se-generation-ii-128gb-black/p/1703557"
          },
          {
            "reseller": "Noon",
            "link": "https://www.noon.com/saudi-en/iphone-se-2020-2nd-gen-with-facetime-black-3gb-ram-128gb-4g-lte/N37744186A/p?o=e2c3f58912a9046e"
          },
          {
            "reseller": "Amazon",
            "link": "NA"
          },
          {
            "reseller": "X-Cite",
            "link": "https://www.xcite.com.sa/apple-iphone-se-128gb-phone-black.html"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "https://najdtelecom.com/products/bfd261a4-f67a-4f3b-a70e-3e50cd65202e"
          },
          {
            "reseller": "Al Raseil",
            "link": "https://alrasail.com.sa/product/%d9%87%d8%a7%d8%aa%d9%81-%d8%a7%d9%8a%d9%81%d9%88%d9%86-se2-%d9%85%d9%88%d8%af%d9%8a%d9%84-2020-%d8%a7%d9%84%d8%ac%d9%8a%d9%84-%d8%a7%d9%84%d8%b1%d8%a7%d8%a8%d8%b9-%d8%a7%d9%84-%d8%aa%d9%8a-%d8%a7/"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "https://hazmi.online/products/iphone-se?variant=33542649806985"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],        
        "gold": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "NA"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ],
        "midnightgreen": [
          {
            "reseller": "Lulu",
            "link": "NA"
          },
          {
            "reseller": "Noon",
            "link": "NA"
          },
          {
            "reseller": "Amazon",
            "link": "NA"
          },
          {
            "reseller": "X-Cite",
            "link": "NA"
          },
          {
            "reseller": "Virgin Megastore",
            "link": "NA"
          },
          {
            "reseller": "Najd Telecom",
            "link": "NA"
          },
          {
            "reseller": "Al Raseil",
            "link": "NA"
          },
          {
            "reseller": "Saleh El Hazmy",
            "link": "NA"
          },
          {
            "reseller": "Al Mutasel",
            "link": "https://api.whatsapp.com/send?phone=w966532101010"
          }
        ]
      }
    }
  }
];

	jQuery('.gallery-main-img').imageZoom();

	setLinks(jsonPhones);
	
	jQuery(document).on('click', '.gallery-icons img', function(){
		var img_src = jQuery(this).attr('bigimg');
		if(img_src == 'video_iPhone_11_pro') {
			jQuery('.gallery-main-img-wrapper').html('<div style="padding:50px 0px;"><video controls width="100%" height="100%"><source src="images/video/iphone11Pro.mp4" type="video/mp4" /></video></div>');
		} 
		else if(img_src == 'video_iPhone_11') {
			jQuery('.gallery-main-img-wrapper').html('<div style="padding:50px 0px;"><video controls width="100%" height="100%"><source src="images/video/iphone11.mp4" type="video/mp4" /></video></div>');
		} 
		else if(img_src == 'video_iPhone_se') {
			jQuery('.gallery-main-img-wrapper').html('<div style="padding:50px 0px;"><video controls width="100%" height="100%"><source src="images/video/iPhoneSE.mp4" type="video/mp4" /></video></div>');
		} 
		
		else {
			jQuery('.gallery-main-img-wrapper').html('<img src="'+img_src+'" class="gallery-main-img" alt="" width="100%" />');
			jQuery('.gallery-main-img').imageZoom();
		}
	});

	jQuery('.color-phones img').on('click', function(){		
		var color_name = jQuery(this).attr('colorName');
		jQuery('#color_name').html(color_name);
		
		jQuery('.color-phones img').removeClass('active-color');
		jQuery(this).addClass('active-color');

		jQuery('.gallery-main-img').attr('src', 'images/loader.gif');
		var html_gallery_item = gallery_main_img = '';

		if(jQuery('body').hasClass('iphone11')){
			if(color_name == 'Black'){
				gallery_main_img = 'images/products/iphone11/black/1.png';
				html_gallery_item = '';
				html_gallery_item += '<img src="images/products/iphone11/black/1.png" bigimg="images/products/iphone11/black/1.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/black/2.png" bigimg="images/products/iphone11/black/2.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/black/3.png" bigimg="images/products/iphone11/black/3.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/black/4.png" bigimg="images/products/iphone11/black/4.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/black/5.png" bigimg="images/products/iphone11/black/5.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/black/6.png" bigimg="images/products/iphone11/black/6.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/black/7.png" bigimg="images/products/iphone11/black/7.png" alt="" />';
				html_gallery_item += '<img src="images/video/iphone11_thumb.jpg" class="video_thubnail" bigimg="video_iPhone_11" alt=""  />';
				
			}

			else if(color_name == 'White'){
				gallery_main_img = 'images/products/iphone11/white/1.png';
				html_gallery_item = '';
				html_gallery_item += '<img src="images/products/iphone11/white/1.png" bigimg="images/products/iphone11/white/1.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/white/2.png" bigimg="images/products/iphone11/white/2.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/white/3.png" bigimg="images/products/iphone11/white/3.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/white/4.png" bigimg="images/products/iphone11/white/4.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/white/5.png" bigimg="images/products/iphone11/white/5.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/white/6.png" bigimg="images/products/iphone11/white/6.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/white/7.png" bigimg="images/products/iphone11/white/7.png" alt="" />';
				html_gallery_item += '<img src="images/video/iphone11_thumb.jpg" class="video_thubnail" bigimg="video_iPhone_11" alt=""  />';
			}
			
			else if(color_name == 'Red'){
				gallery_main_img = 'images/products/iphone11/red/1.png';
				html_gallery_item = '';
				html_gallery_item += '<img src="images/products/iphone11/red/1.png" bigimg="images/products/iphone11/red/1.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/red/2.png" bigimg="images/products/iphone11/red/2.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/red/3.png" bigimg="images/products/iphone11/red/3.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/red/4.png" bigimg="images/products/iphone11/red/4.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/red/5.png" bigimg="images/products/iphone11/red/5.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/red/6.png" bigimg="images/products/iphone11/red/6.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/red/7.png" bigimg="images/products/iphone11/red/7.png" alt="" />';
				html_gallery_item += '<img src="images/video/iphone11_thumb.jpg" class="video_thubnail" bigimg="video_iPhone_11" alt=""  />';
			}
			else if(color_name == 'Purple'){
				gallery_main_img = 'images/products/iphone11/Purple/1.png';
				html_gallery_item = '';
				html_gallery_item += '<img src="images/products/iphone11/Purple/1.png" bigimg="images/products/iphone11/Purple/1.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/Purple/2.png" bigimg="images/products/iphone11/Purple/2.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/Purple/3.png" bigimg="images/products/iphone11/Purple/3.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/Purple/4.png" bigimg="images/products/iphone11/Purple/4.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/Purple/5.png" bigimg="images/products/iphone11/Purple/5.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/Purple/6.png" bigimg="images/products/iphone11/Purple/6.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/Purple/7.png" bigimg="images/products/iphone11/Purple/7.png" alt="" />';
				html_gallery_item += '<img src="images/video/iphone11_thumb.jpg" class="video_thubnail" bigimg="video_iPhone_11" alt=""  />';
			}
			else if(color_name == 'Green'){
				gallery_main_img = 'images/products/iphone11/green/1.png';
				html_gallery_item = '';
				html_gallery_item += '<img src="images/products/iphone11/green/1.png" bigimg="images/products/iphone11/green/1.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/green/2.png" bigimg="images/products/iphone11/green/2.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/green/3.png" bigimg="images/products/iphone11/green/3.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/green/4.png" bigimg="images/products/iphone11/green/4.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/green/5.png" bigimg="images/products/iphone11/green/5.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/green/6.png" bigimg="images/products/iphone11/green/6.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/green/7.png" bigimg="images/products/iphone11/green/7.png" alt="" />';
				html_gallery_item += '<img src="images/video/iphone11_thumb.jpg" class="video_thubnail" bigimg="video_iPhone_11" alt=""  />';
			}
			else { //Yellow
				gallery_main_img = 'images/products/iphone11/yellow/1.png';
				html_gallery_item = '';
				html_gallery_item += '<img src="images/products/iphone11/yellow/1.png" bigimg="images/products/iphone11/yellow/1.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/yellow/2.png" bigimg="images/products/iphone11/yellow/2.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/yellow/3.png" bigimg="images/products/iphone11/yellow/3.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/yellow/4.png" bigimg="images/products/iphone11/yellow/4.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/yellow/5.png" bigimg="images/products/iphone11/yellow/5.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/yellow/6.png" bigimg="images/products/iphone11/yellow/6.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11/yellow/7.png" bigimg="images/products/iphone11/yellow/7.png" alt="" />';
				html_gallery_item += '<img src="images/video/iphone11_thumb.jpg" class="video_thubnail" bigimg="video_iPhone_11" alt=""  />';
			}
			
			
		} else if(jQuery('body').hasClass('iphone11pro')){
      if(color_name == 'Gold'){
        gallery_main_img = 'images/products/iphone11pro/gold/1.jpg';
        html_gallery_item = '';
        html_gallery_item += '<img src="images/products/iphone11pro/gold/1.jpg" bigimg="images/products/iphone11pro/gold/1.jpg" alt="" />';
        html_gallery_item += '<img src="images/products/iphone11pro/gold/2.jpg" bigimg="images/products/iphone11pro/gold/2.jpg" alt="" />';
        html_gallery_item += '<img src="images/products/iphone11pro/gold/3.jpg" bigimg="images/products/iphone11pro/gold/3.jpg" alt="" />';
        html_gallery_item += '<img src="images/products/iphone11pro/gold/5.jpg" bigimg="images/products/iphone11pro/gold/5.jpg" alt="" />';
        html_gallery_item += '<img src="images/products/iphone11pro/gold/6.jpg" bigimg="images/products/iphone11pro/gold/6.jpg" alt="" />';
        html_gallery_item += '<img src="images/products/iphone11pro/gold/6.jpg" bigimg="images/products/iphone11pro/gold/6.jpg" alt="" />';
        html_gallery_item += '<img src="images/video/iphone11_pro_thumb.jpg" class="video_thubnail" bigimg="video_iPhone_11_pro" alt="" />';
      }
      else if(color_name == 'Silver'){
        gallery_main_img = 'images/products/iphone11pro/silver/1.jpg';
        html_gallery_item = '';
        html_gallery_item += '<img src="images/products/iphone11pro/silver/1.jpg" bigimg="images/products/iphone11pro/silver/1.jpg" alt="" />';
        html_gallery_item += '<img src="images/products/iphone11pro/silver/2.jpg" bigimg="images/products/iphone11pro/silver/2.jpg" alt="" />';
        html_gallery_item += '<img src="images/products/iphone11pro/silver/3.jpg" bigimg="images/products/iphone11pro/silver/3.jpg" alt="" />';
        html_gallery_item += '<img src="images/products/iphone11pro/silver/4.jpg" bigimg="images/products/iphone11pro/silver/4.jpg" alt="" />';
        html_gallery_item += '<img src="images/products/iphone11pro/silver/5.jpg" bigimg="images/products/iphone11pro/silver/5.jpg" alt="" />';
        html_gallery_item += '<img src="images/products/iphone11pro/silver/6.jpg" bigimg="images/products/iphone11pro/silver/6.jpg" alt="" />';
        html_gallery_item += '<img src="images/video/iphone11_pro_thumb.jpg" class="video_thubnail" bigimg="video_iPhone_11_pro" alt="" />';
      }
      
      else if(color_name == 'Midnight Green'){
        gallery_main_img = 'images/products/iphone11pro/midnightgreen/1.jpg';
        html_gallery_item = '';
        html_gallery_item += '<img src="images/products/iphone11pro/midnightgreen/1.jpg" bigimg="images/products/iphone11pro/midnightgreen/1.jpg" alt="" />';
        html_gallery_item += '<img src="images/products/iphone11pro/midnightgreen/2.jpg" bigimg="images/products/iphone11pro/midnightgreen/2.jpg" alt="" />';
        html_gallery_item += '<img src="images/products/iphone11pro/midnightgreen/3.jpg" bigimg="images/products/iphone11pro/midnightgreen/3.jpg" alt="" />';
        html_gallery_item += '<img src="images/products/iphone11pro/midnightgreen/5.jpg" bigimg="images/products/iphone11pro/midnightgreen/5.jpg" alt="" />';
        html_gallery_item += '<img src="images/video/iphone11_pro_thumb.jpg" class="video_thubnail" bigimg="video_iPhone_11_pro" alt="" />';
      }
      
      else { //Space Gray
        gallery_main_img = 'images/products/iphone11pro/gray/1.png';
        html_gallery_item = '';
        html_gallery_item += '<img src="images/products/iphone11pro/gray/1.png" bigimg="images/products/iphone11pro/gray/1.png" alt="" />';
        html_gallery_item += '<img src="images/products/iphone11pro/gray/2.png" bigimg="images/products/iphone11pro/gray/2.png" alt="" />';
        html_gallery_item += '<img src="images/products/iphone11pro/gray/3.png" bigimg="images/products/iphone11pro/gray/3.png" alt="" />';
        html_gallery_item += '<img src="images/products/iphone11pro/gray/5.jpg" bigimg="images/products/iphone11pro/gray/5.jpg" alt="" />';
        html_gallery_item += '<img src="images/products/iphone11pro/gray/6.jpg" bigimg="images/products/iphone11pro/gray/6.jpg" alt="" />';
        html_gallery_item += '<img src="images/video/iphone11_pro_thumb.jpg" class="video_thubnail" bigimg="video_iPhone_11_pro" alt="" />';
      }
      
    }
    else if(jQuery('body').hasClass('iphone11promax')){
			if(color_name == 'Gold'){
				gallery_main_img = 'images/products/iphone11pro/gold/1.jpg';
				html_gallery_item = '';
				html_gallery_item += '<img src="images/products/iphone11pro/gold/1.jpg" bigimg="images/products/iphone11pro/gold/1.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11pro/gold/2.jpg" bigimg="images/products/iphone11pro/gold/2.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11pro/gold/3.jpg" bigimg="images/products/iphone11pro/gold/3.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11pro/gold/5.jpg" bigimg="images/products/iphone11pro/gold/5.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11pro/gold/6.jpg" bigimg="images/products/iphone11pro/gold/6.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11pro/gold/6.jpg" bigimg="images/products/iphone11pro/gold/6.jpg" alt="" />';
				html_gallery_item += '<img src="images/video/iphone11_pro_thumb.jpg" class="video_thubnail" bigimg="video_iPhone_11_pro" alt="" />';
			}
			else if(color_name == 'Silver'){
				gallery_main_img = 'images/products/iphone11pro/silver/1.jpg';
				html_gallery_item = '';
				html_gallery_item += '<img src="images/products/iphone11pro/silver/1.jpg" bigimg="images/products/iphone11pro/silver/1.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11pro/silver/2.jpg" bigimg="images/products/iphone11pro/silver/2.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11pro/silver/3.jpg" bigimg="images/products/iphone11pro/silver/3.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11pro/silver/4.jpg" bigimg="images/products/iphone11pro/silver/4.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11pro/silver/5.jpg" bigimg="images/products/iphone11pro/silver/5.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11pro/silver/6.jpg" bigimg="images/products/iphone11pro/silver/6.jpg" alt="" />';
				html_gallery_item += '<img src="images/video/iphone11_pro_thumb.jpg" class="video_thubnail" bigimg="video_iPhone_11_pro" alt="" />';
			}
			
			else if(color_name == 'Midnight Green'){
				gallery_main_img = 'images/products/iphone11pro/midnightgreen/1.jpg';
				html_gallery_item = '';
				html_gallery_item += '<img src="images/products/iphone11pro/midnightgreen/1.jpg" bigimg="images/products/iphone11pro/midnightgreen/1.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11pro/midnightgreen/2.jpg" bigimg="images/products/iphone11pro/midnightgreen/2.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11pro/midnightgreen/3.jpg" bigimg="images/products/iphone11pro/midnightgreen/3.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11pro/midnightgreen/5.jpg" bigimg="images/products/iphone11pro/midnightgreen/5.jpg" alt="" />';
				html_gallery_item += '<img src="images/video/iphone11_pro_thumb.jpg" class="video_thubnail" bigimg="video_iPhone_11_pro" alt="" />';
			}
			
			else { //Space Gray
				gallery_main_img = 'images/products/iphone11pro/gray/1.png';
				html_gallery_item = '';
				html_gallery_item += '<img src="images/products/iphone11pro/gray/1.png" bigimg="images/products/iphone11pro/gray/1.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11pro/gray/2.png" bigimg="images/products/iphone11pro/gray/2.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11pro/gray/3.png" bigimg="images/products/iphone11pro/gray/3.png" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11pro/gray/5.jpg" bigimg="images/products/iphone11pro/gray/5.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphone11pro/gray/6.jpg" bigimg="images/products/iphone11pro/gray/6.jpg" alt="" />';
				html_gallery_item += '<img src="images/video/iphone11_pro_thumb.jpg" class="video_thubnail" bigimg="video_iPhone_11_pro" alt="" />';
			}
			
		}

    else if(jQuery('body').hasClass('iphonese')){
			if(color_name == 'Red'){
				gallery_main_img = 'images/products/iphonese/red/1.jpg';
				html_gallery_item = '';
				html_gallery_item += '<img src="images/products/iphonese/red/1.jpg" bigimg="images/products/iphonese/red/1.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphonese/red/2.jpg" bigimg="images/products/iphonese/red/2.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphonese/red/3.jpg" bigimg="images/products/iphonese/red/3.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphonese/red/4.jpg" bigimg="images/products/iphonese/red/4.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphonese/red/5.jpg" bigimg="images/products/iphonese/red/5.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphonese/red/6.jpg" bigimg="images/products/iphonese/red/6.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphonese/red/7.jpg" bigimg="images/products/iphonese/red/7.jpg" alt="" />';
				html_gallery_item += '<img src="images/video/iphone_se_thumb.jpg" class="video_thubnail" bigimg="video_iPhone_se" alt=""  />';
			}
			else if(color_name == 'Black'){
				gallery_main_img = 'images/products/iphonese/black/1.jpg';
				html_gallery_item = '';
				html_gallery_item += '<img src="images/products/iphonese/black/1.jpg" bigimg="images/products/iphonese/black/1.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphonese/black/2.jpg" bigimg="images/products/iphonese/black/2.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphonese/black/3.jpg" bigimg="images/products/iphonese/black/3.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphonese/black/4.jpg" bigimg="images/products/iphonese/black/4.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphonese/black/5.jpg" bigimg="images/products/iphonese/black/5.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphonese/black/6.jpg" bigimg="images/products/iphonese/black/6.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphonese/black/7.jpg" bigimg="images/products/iphonese/black/7.jpg" alt="" />';
				html_gallery_item += '<img src="images/video/iphone_se_thumb.jpg" class="video_thubnail" bigimg="video_iPhone_se" alt=""  />';
			}
			else { //White
				gallery_main_img = 'images/products/iphonese/white/1.jpg';
				html_gallery_item = '';
				html_gallery_item += '<img src="images/products/iphonese/white/1.jpg" bigimg="images/products/iphonese/white/1.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphonese/white/2.jpg" bigimg="images/products/iphonese/white/2.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphonese/white/3.jpg" bigimg="images/products/iphonese/white/3.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphonese/white/4.jpg" bigimg="images/products/iphonese/white/4.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphonese/white/5.jpg" bigimg="images/products/iphonese/white/5.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphonese/white/6.jpg" bigimg="images/products/iphonese/white/6.jpg" alt="" />';
				html_gallery_item += '<img src="images/products/iphonese/white/7.jpg" bigimg="images/products/iphonese/white/7.jpg" alt="" />';
				html_gallery_item += '<img src="images/video/iphone_se_thumb.jpg" class="video_thubnail" bigimg="video_iPhone_se" alt=""  />';
			}			
		}
		else { //airpodspro //White
			gallery_main_img = 'images/products/AirPodsPro/1.png';
			html_gallery_item = '';
			html_gallery_item += '<img src="images/products/AirPodsPro/1.png" bigimg="images/products/AirPodsPro/1.png" alt="" />';
			html_gallery_item += '<img src="images/products/AirPodsPro/2.png" bigimg="images/products/AirPodsPro/2.png" alt="" />';
			html_gallery_item += '<img src="images/products/AirPodsPro/3.png" bigimg="images/products/AirPodsPro/3.png" alt="" />';
			html_gallery_item += '<img src="images/products/AirPodsPro/4.png" bigimg="images/products/AirPodsPro/4.png" alt="" />';
			html_gallery_item += '<img src="images/products/AirPodsPro/5.png" bigimg="images/products/AirPodsPro/5.png" alt="" />';
			html_gallery_item += '<img src="images/products/AirPodsPro/6.png" bigimg="images/products/AirPodsPro/6.png" alt="" />';
		}

		jQuery('.gallery-main-img-wrapper').html('<img src="'+gallery_main_img+'" class="gallery-main-img" alt="" width="100%" />');
		jQuery('.gallery-main-img').imageZoom();		
		jQuery('.gallery-icons').html(html_gallery_item);

		setLinks(jsonPhones);
	});



	jQuery(document).on('click','.getgb', function(){
		var getgb = $(this).text();
		$('.getgb').removeClass('active-bdrcolor');
		$(this).addClass('active-bdrcolor');
		jQuery( "td.i11" ).each(function( i ) {
			// jQuery( this ).addClass( "foo"+i );
			if (getgb == '64GB') {
				$(this).text($(this).data('gb64'));
				if ($(this).data('gb64') == 'Not Available') {
					$(this).parent().find('.contact a').addClass('disabled').attr("disabled", "disabled");
				} else {
					$(this).parent().find('.contact a').removeClass('disabled').removeAttr("disabled", "disabled");					
				}
			} else if (getgb == '128GB'){
				$(this).text($(this).data('gb128'));
				if ($(this).data('gb128') == 'Not Available') {
					$(this).parent().find('.contact a').addClass('disabled').attr("disabled", "disabled");
				} else {
					$(this).parent().find('.contact a').removeClass('disabled').removeAttr("disabled", "disabled");					
				}
			} else if (getgb == '256GB'){
				$(this).text($(this).data('gb256'));
				if ($(this).data('gb256') == 'Not Available') {
					$(this).parent().find('.contact a').addClass('disabled').attr("disabled", "disabled");
				} else {
					$(this).parent().find('.contact a').removeClass('disabled').removeAttr("disabled", "disabled");					
				}
			} else if (getgb == '512GB'){
				$(this).text($(this).data('gb512'));
				if ($(this).data('gb512') == 'Not Available') {
					$(this).parent().find('.contact a').addClass('disabled').attr("disabled", "disabled");
				} else {
					$(this).parent().find('.contact a').removeClass('disabled').removeAttr("disabled", "disabled");					
				}
			}
			// alert();
		});

		setLinks(jsonPhones);
	});

	$(document).on('click', 'a.disabled', function(e) {
		if ($(this).attr('disabled') == 'disabled') {
			e.preventDefault();
		}
	});

	jQuery('.tab').on('click',function(){
		var tab_id = $(this).attr('data-tab');

		$('.tab').removeClass('current');
		$('.features').removeClass('current');
		
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');

		if ($('body').hasClass("iphone11pro")) {
			$('body').removeClass("iphone11pro");
			$('body').addClass("iphone11promax");
		} else {
			$('body').removeClass("iphone11promax");
			$('body').addClass("iphone11pro");
		}
		setLinks(jsonPhones);
	});
});
