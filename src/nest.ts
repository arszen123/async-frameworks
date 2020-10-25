import {NestFactory} from '@nestjs/core';
import {Controller, Get, Injectable, Module, Param} from '@nestjs/common';
import {InjectModel, MongooseModule, Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document, Model} from "mongoose";

type ProductDoc = Product & Document;

@Schema()
class Product {
    @Prop()
    _id: string;

    @Prop({required: true, index: true})
    ean: number;

    @Prop({required: true})
    name: string;
}

const ProductSchema = SchemaFactory.createForClass(Product);

@Injectable()
class ProductService {

    constructor(@InjectModel(Product.name) private productModel: Model<ProductDoc>) {
    }

    async findByEan(ean: number): Promise<Product[]> {
        return this.productModel.find({ean}).exec();
    }
}

@Controller()
export class ProductController {
    constructor(private readonly appService: ProductService) {
    }

    @Get('/products/:ean')
    getProducts(@Param('ean') ean: number): any {
        return this.appService.findByEan(ean);
    }
}

@Module({
    imports: [
        MongooseModule.forRoot(require('../lib/db').url),
        MongooseModule.forFeature([{name: 'Product', schema: ProductSchema}])
    ],
    controllers: [ProductController],
    providers: [ProductService],
})
export class BenchModule {
}


export async function start() {
    const app = await NestFactory.create(BenchModule, {logger: false});
    await app.listen(3000);
    return 3000;
}
