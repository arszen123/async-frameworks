mongod --bind_ip 0.0.0.0 --fork --logpath mongod.log
mongo async-benchmark --eval 'db.products.insert({ean: 9780471117094, name: "Pen"}); db.products.insert({ean: 4006381333931, name: "Pencil"}); db.products.createIndex({ean: 1})'
npm run test
npm run start
