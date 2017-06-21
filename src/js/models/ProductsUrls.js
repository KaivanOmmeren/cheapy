import {model} from 'backbone';

const ProductsUrls = Backbone.Model.extend({
        diapers: [
            {
                brand: 'Pampers Baby-Dry',
                size: '0',
                urls: []
            },
            {
                brand: 'Pampers Baby-Dry',
                size: '1',
                urls: []
            },
            {
                brand: 'Pampers Baby-Dry',
                size: '2',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000035040209?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Baby-Dry',
                size: '3',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559155?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000063329571?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Baby-Dry',
                size: '4',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559157?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000063329569?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000038658845?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Baby-Dry',
                size: '4+',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559159?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000063329573?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000057943915?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000064272869?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000038658851?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Baby-Dry',
                size: '5',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559161?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000057943937?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000063520824?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Baby-Dry',
                size: '5+',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559163?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Baby-Dry',
                size: '6',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559165?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000064272867?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000057943998?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000063520010?offers=cheapest&includeAttributes=false&format=json'
                ]
            }, {
                brand: 'Pampers Baby-Dry',
                size: '6+',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000035898794?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Baby-Dry Pants',
                size: '0',
                urls: []
            },
            {
                brand: 'Pampers Baby-Dry Pants',
                size: '1',
                urls: []
            },
            {
                brand: 'Pampers Baby-Dry Pants',
                size: '2',
                urls: []
            },
            {
                brand: 'Pampers Baby-Dry Pants',
                size: '3',
                urls: []
            },
            {
                brand: 'Pampers Baby-Dry Pants',
                size: '4',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000058374504?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000072820892?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000072582690?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Baby-Dry Pants',
                size: '4+',
                urls: []
            },
            {
                brand: 'Pampers Baby-Dry Pants',
                size: '5',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000073068191?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000072820916?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000063990400?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Baby-Dry Pants',
                size: '5+',
                urls: []
            },
            {
                brand: 'Pampers Baby-Dry Pants',
                size: '6',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000073068189?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000058308047?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000072820906?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000072750637?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Baby-Dry Pants',
                size: '6+',
                urls: []
            }
            ,
            {
                brand: 'Pampers Premium Protection',
                size: '0',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000024753989?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Premium Protection',
                size: '1',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000058906167?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000058374508?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000058374510?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000024753923?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Premium Protection',
                size: '2',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559167?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000058374540?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000024753963?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Premium Protection',
                size: '3',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000058374506?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000024753905?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Premium Protection',
                size: '4',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000063520200?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Premium Protection',
                size: '4+',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000069512190?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Premium Protection',
                size: '5',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000063520074?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Premium Protection',
                size: '5+',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000069512162?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Premium Protection',
                size: '6',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000069512182?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Premium Protection',
                size: '6+',
                urls: []
            },
            {
                brand: 'Pampers New Baby',
                size: '0',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559157?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559157?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers New Baby',
                size: '1',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559157?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers New Baby',
                size: '2',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559157?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559157?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers New Baby',
                size: '3',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559157?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559157?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers New Baby',
                size: '4',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559157?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559157?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers New Baby',
                size: '4+',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559157?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559157?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers New Baby',
                size: '5',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559157?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559157?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers New Baby',
                size: '5+',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559157?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559157?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers New Baby',
                size: '6',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559157?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559157?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Active fit',
                size: '0',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559157?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559157?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Active fit',
                size: '1',
                urls: []
            },
            {
                brand: 'Pampers Active fit',
                size: '2',
                urls: []
            },
            {
                brand: 'Pampers Active fit',
                size: '3',
                urls: []
            },
            {
                brand: 'Pampers Active fit',
                size: '4',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559147?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000038658859?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Active fit',
                size: '4+',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559149?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Active fit',
                size: '5',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000010559151?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000056864755?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000038658853?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Active fit',
                size: '5+',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/920000001055915?offers=cheapest&includeAttributes=false&format=json'
                ]
            },
            {
                brand: 'Pampers Active fit',
                size: '6',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000043036977?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000038658849?offers=cheapest&includeAttributes=false&format=json'
                ]
            }, {
                brand: 'Pampers Active fit',
                size: '6+',
                urls: [
                ]
            }
        ],

        milk: [
            {
                brand: 'Hero',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000002223123?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000046060696?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000046060690?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000002223133?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000075317727?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000002223135?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000046060694?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000075318628?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000075319842?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000075319146?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000075319761?offers=cheapest&includeAttributes=false&format=json'
                ]
            }
            , {
                brand: 'Nutrilon',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000011043095?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000011043097?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000011043103?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000044233076?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000011043099?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000003850804?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000003851146?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000011043101?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000044232846?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000001534500?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000075316219?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000011043105?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000021000277?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000073966662?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000001534490?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000075317637?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000077562976?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000017740148?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000073966664?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000073966658?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000073966666?offers=cheapest&includeAttributes=false&format=json'
                ]
            }, {
                brand: 'HiPP',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000007510923?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000007510921?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000058756769?offers=cheapest&includeAttributes=false&format=json'
                ]
            }
        ],

        babyWipes: [
            {
                brand: 'Pampers',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000024753993?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000024753935?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000072606384?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000024753961?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000002147761?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000002147757?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000024753931?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000026341737?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000024753975?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000024753991?offers=cheapest&includeAttributes=false&format=json'
                ]
            }
            ,
            {
                brand: 'Zwitsal',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000035603838?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000035603842?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000035284395?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000035284389?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000035284387?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000046184979?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000071601031?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000055835740?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000007072469?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000036415048?offers=cheapest&includeAttributes=false&format=json'
                ]
            }
            , {
                brand: 'Huggies',
                urls: [
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000057435341?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000046116892?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000061401875?offers=cheapest&includeAttributes=false&format=json',
                    '/api/proxy?url=https://api.bol.com/catalog/v4/products/9200000046153066?offers=cheapest&includeAttributes=false&format=json'
                ]
            }
        ]
    });
export default ProductsUrls;