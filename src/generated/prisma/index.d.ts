
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model product_tags
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type product_tags = $Result.DefaultSelection<Prisma.$product_tagsPayload>
/**
 * Model products_hardware
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type products_hardware = $Result.DefaultSelection<Prisma.$products_hardwarePayload>
/**
 * Model tag_categories
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type tag_categories = $Result.DefaultSelection<Prisma.$tag_categoriesPayload>
/**
 * Model tags
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type tags = $Result.DefaultSelection<Prisma.$tagsPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Footer
 * 
 */
export type Footer = $Result.DefaultSelection<Prisma.$FooterPayload>
/**
 * Model FooterLink
 * 
 */
export type FooterLink = $Result.DefaultSelection<Prisma.$FooterLinkPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product_tags`: Exposes CRUD operations for the **product_tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_tags
    * const product_tags = await prisma.product_tags.findMany()
    * ```
    */
  get product_tags(): Prisma.product_tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products_hardware`: Exposes CRUD operations for the **products_hardware** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products_hardwares
    * const products_hardwares = await prisma.products_hardware.findMany()
    * ```
    */
  get products_hardware(): Prisma.products_hardwareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag_categories`: Exposes CRUD operations for the **tag_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tag_categories
    * const tag_categories = await prisma.tag_categories.findMany()
    * ```
    */
  get tag_categories(): Prisma.tag_categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.footer`: Exposes CRUD operations for the **Footer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Footers
    * const footers = await prisma.footer.findMany()
    * ```
    */
  get footer(): Prisma.FooterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.footerLink`: Exposes CRUD operations for the **FooterLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FooterLinks
    * const footerLinks = await prisma.footerLink.findMany()
    * ```
    */
  get footerLink(): Prisma.FooterLinkDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Product: 'Product',
    product_tags: 'product_tags',
    products_hardware: 'products_hardware',
    tag_categories: 'tag_categories',
    tags: 'tags',
    User: 'User',
    Footer: 'Footer',
    FooterLink: 'FooterLink'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "product" | "product_tags" | "products_hardware" | "tag_categories" | "tags" | "user" | "footer" | "footerLink"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      product_tags: {
        payload: Prisma.$product_tagsPayload<ExtArgs>
        fields: Prisma.product_tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_tagsPayload>
          }
          findFirst: {
            args: Prisma.product_tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_tagsPayload>
          }
          findMany: {
            args: Prisma.product_tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_tagsPayload>[]
          }
          create: {
            args: Prisma.product_tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_tagsPayload>
          }
          createMany: {
            args: Prisma.product_tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.product_tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_tagsPayload>[]
          }
          delete: {
            args: Prisma.product_tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_tagsPayload>
          }
          update: {
            args: Prisma.product_tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_tagsPayload>
          }
          deleteMany: {
            args: Prisma.product_tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.product_tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.product_tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_tagsPayload>[]
          }
          upsert: {
            args: Prisma.product_tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_tagsPayload>
          }
          aggregate: {
            args: Prisma.Product_tagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_tags>
          }
          groupBy: {
            args: Prisma.product_tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_tagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_tagsCountArgs<ExtArgs>
            result: $Utils.Optional<Product_tagsCountAggregateOutputType> | number
          }
        }
      }
      products_hardware: {
        payload: Prisma.$products_hardwarePayload<ExtArgs>
        fields: Prisma.products_hardwareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.products_hardwareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_hardwarePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.products_hardwareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_hardwarePayload>
          }
          findFirst: {
            args: Prisma.products_hardwareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_hardwarePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.products_hardwareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_hardwarePayload>
          }
          findMany: {
            args: Prisma.products_hardwareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_hardwarePayload>[]
          }
          create: {
            args: Prisma.products_hardwareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_hardwarePayload>
          }
          createMany: {
            args: Prisma.products_hardwareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.products_hardwareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_hardwarePayload>[]
          }
          delete: {
            args: Prisma.products_hardwareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_hardwarePayload>
          }
          update: {
            args: Prisma.products_hardwareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_hardwarePayload>
          }
          deleteMany: {
            args: Prisma.products_hardwareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.products_hardwareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.products_hardwareUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_hardwarePayload>[]
          }
          upsert: {
            args: Prisma.products_hardwareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_hardwarePayload>
          }
          aggregate: {
            args: Prisma.Products_hardwareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts_hardware>
          }
          groupBy: {
            args: Prisma.products_hardwareGroupByArgs<ExtArgs>
            result: $Utils.Optional<Products_hardwareGroupByOutputType>[]
          }
          count: {
            args: Prisma.products_hardwareCountArgs<ExtArgs>
            result: $Utils.Optional<Products_hardwareCountAggregateOutputType> | number
          }
        }
      }
      tag_categories: {
        payload: Prisma.$tag_categoriesPayload<ExtArgs>
        fields: Prisma.tag_categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tag_categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tag_categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tag_categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tag_categoriesPayload>
          }
          findFirst: {
            args: Prisma.tag_categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tag_categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tag_categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tag_categoriesPayload>
          }
          findMany: {
            args: Prisma.tag_categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tag_categoriesPayload>[]
          }
          create: {
            args: Prisma.tag_categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tag_categoriesPayload>
          }
          createMany: {
            args: Prisma.tag_categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tag_categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tag_categoriesPayload>[]
          }
          delete: {
            args: Prisma.tag_categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tag_categoriesPayload>
          }
          update: {
            args: Prisma.tag_categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tag_categoriesPayload>
          }
          deleteMany: {
            args: Prisma.tag_categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tag_categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tag_categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tag_categoriesPayload>[]
          }
          upsert: {
            args: Prisma.tag_categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tag_categoriesPayload>
          }
          aggregate: {
            args: Prisma.Tag_categoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag_categories>
          }
          groupBy: {
            args: Prisma.tag_categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tag_categoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.tag_categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Tag_categoriesCountAggregateOutputType> | number
          }
        }
      }
      tags: {
        payload: Prisma.$tagsPayload<ExtArgs>
        fields: Prisma.tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findFirst: {
            args: Prisma.tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findMany: {
            args: Prisma.tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          create: {
            args: Prisma.tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          createMany: {
            args: Prisma.tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          delete: {
            args: Prisma.tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          update: {
            args: Prisma.tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          deleteMany: {
            args: Prisma.tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          upsert: {
            args: Prisma.tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagsCountArgs<ExtArgs>
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Footer: {
        payload: Prisma.$FooterPayload<ExtArgs>
        fields: Prisma.FooterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FooterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FooterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>
          }
          findFirst: {
            args: Prisma.FooterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FooterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>
          }
          findMany: {
            args: Prisma.FooterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>[]
          }
          create: {
            args: Prisma.FooterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>
          }
          createMany: {
            args: Prisma.FooterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FooterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>[]
          }
          delete: {
            args: Prisma.FooterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>
          }
          update: {
            args: Prisma.FooterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>
          }
          deleteMany: {
            args: Prisma.FooterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FooterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FooterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>[]
          }
          upsert: {
            args: Prisma.FooterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>
          }
          aggregate: {
            args: Prisma.FooterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFooter>
          }
          groupBy: {
            args: Prisma.FooterGroupByArgs<ExtArgs>
            result: $Utils.Optional<FooterGroupByOutputType>[]
          }
          count: {
            args: Prisma.FooterCountArgs<ExtArgs>
            result: $Utils.Optional<FooterCountAggregateOutputType> | number
          }
        }
      }
      FooterLink: {
        payload: Prisma.$FooterLinkPayload<ExtArgs>
        fields: Prisma.FooterLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FooterLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FooterLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterLinkPayload>
          }
          findFirst: {
            args: Prisma.FooterLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FooterLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterLinkPayload>
          }
          findMany: {
            args: Prisma.FooterLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterLinkPayload>[]
          }
          create: {
            args: Prisma.FooterLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterLinkPayload>
          }
          createMany: {
            args: Prisma.FooterLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FooterLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterLinkPayload>[]
          }
          delete: {
            args: Prisma.FooterLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterLinkPayload>
          }
          update: {
            args: Prisma.FooterLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterLinkPayload>
          }
          deleteMany: {
            args: Prisma.FooterLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FooterLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FooterLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterLinkPayload>[]
          }
          upsert: {
            args: Prisma.FooterLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterLinkPayload>
          }
          aggregate: {
            args: Prisma.FooterLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFooterLink>
          }
          groupBy: {
            args: Prisma.FooterLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<FooterLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.FooterLinkCountArgs<ExtArgs>
            result: $Utils.Optional<FooterLinkCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    product?: ProductOmit
    product_tags?: product_tagsOmit
    products_hardware?: products_hardwareOmit
    tag_categories?: tag_categoriesOmit
    tags?: tagsOmit
    user?: UserOmit
    footer?: FooterOmit
    footerLink?: FooterLinkOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    product_tags: number
    products_hardware: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_tags?: boolean | ProductCountOutputTypeCountProduct_tagsArgs
    products_hardware?: boolean | ProductCountOutputTypeCountProducts_hardwareArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProduct_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_tagsWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProducts_hardwareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: products_hardwareWhereInput
  }


  /**
   * Count Type Tag_categoriesCountOutputType
   */

  export type Tag_categoriesCountOutputType = {
    tags: number
  }

  export type Tag_categoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | Tag_categoriesCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * Tag_categoriesCountOutputType without action
   */
  export type Tag_categoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag_categoriesCountOutputType
     */
    select?: Tag_categoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tag_categoriesCountOutputType without action
   */
  export type Tag_categoriesCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagsWhereInput
  }


  /**
   * Count Type TagsCountOutputType
   */

  export type TagsCountOutputType = {
    product_tags: number
  }

  export type TagsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_tags?: boolean | TagsCountOutputTypeCountProduct_tagsArgs
  }

  // Custom InputTypes
  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsCountOutputType
     */
    select?: TagsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeCountProduct_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_tagsWhereInput
  }


  /**
   * Count Type FooterCountOutputType
   */

  export type FooterCountOutputType = {
    links: number
  }

  export type FooterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    links?: boolean | FooterCountOutputTypeCountLinksArgs
  }

  // Custom InputTypes
  /**
   * FooterCountOutputType without action
   */
  export type FooterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterCountOutputType
     */
    select?: FooterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FooterCountOutputType without action
   */
  export type FooterCountOutputTypeCountLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FooterLinkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    cover_image: string | null
    spec_pdf_url: string | null
    is_active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    cover_image: string | null
    spec_pdf_url: string | null
    is_active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    cover_image: number
    spec_pdf_url: number
    is_active: number
    description_i18n: number
    software_space: number
    hardware_space: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    cover_image?: true
    spec_pdf_url?: true
    is_active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    cover_image?: true
    spec_pdf_url?: true
    is_active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    cover_image?: true
    spec_pdf_url?: true
    is_active?: true
    description_i18n?: true
    software_space?: true
    hardware_space?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    description: string | null
    cover_image: string | null
    spec_pdf_url: string | null
    is_active: boolean
    description_i18n: JsonValue | null
    software_space: JsonValue | null
    hardware_space: JsonValue | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    cover_image?: boolean
    spec_pdf_url?: boolean
    is_active?: boolean
    description_i18n?: boolean
    software_space?: boolean
    hardware_space?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product_tags?: boolean | Product$product_tagsArgs<ExtArgs>
    products_hardware?: boolean | Product$products_hardwareArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    cover_image?: boolean
    spec_pdf_url?: boolean
    is_active?: boolean
    description_i18n?: boolean
    software_space?: boolean
    hardware_space?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    cover_image?: boolean
    spec_pdf_url?: boolean
    is_active?: boolean
    description_i18n?: boolean
    software_space?: boolean
    hardware_space?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    cover_image?: boolean
    spec_pdf_url?: boolean
    is_active?: boolean
    description_i18n?: boolean
    software_space?: boolean
    hardware_space?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "cover_image" | "spec_pdf_url" | "is_active" | "description_i18n" | "software_space" | "hardware_space" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_tags?: boolean | Product$product_tagsArgs<ExtArgs>
    products_hardware?: boolean | Product$products_hardwareArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      product_tags: Prisma.$product_tagsPayload<ExtArgs>[]
      products_hardware: Prisma.$products_hardwarePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      cover_image: string | null
      spec_pdf_url: string | null
      is_active: boolean
      description_i18n: Prisma.JsonValue | null
      software_space: Prisma.JsonValue | null
      hardware_space: Prisma.JsonValue | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product_tags<T extends Product$product_tagsArgs<ExtArgs> = {}>(args?: Subset<T, Product$product_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products_hardware<T extends Product$products_hardwareArgs<ExtArgs> = {}>(args?: Subset<T, Product$products_hardwareArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$products_hardwarePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly cover_image: FieldRef<"Product", 'String'>
    readonly spec_pdf_url: FieldRef<"Product", 'String'>
    readonly is_active: FieldRef<"Product", 'Boolean'>
    readonly description_i18n: FieldRef<"Product", 'Json'>
    readonly software_space: FieldRef<"Product", 'Json'>
    readonly hardware_space: FieldRef<"Product", 'Json'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data?: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.product_tags
   */
  export type Product$product_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_tags
     */
    select?: product_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_tags
     */
    omit?: product_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_tagsInclude<ExtArgs> | null
    where?: product_tagsWhereInput
    orderBy?: product_tagsOrderByWithRelationInput | product_tagsOrderByWithRelationInput[]
    cursor?: product_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_tagsScalarFieldEnum | Product_tagsScalarFieldEnum[]
  }

  /**
   * Product.products_hardware
   */
  export type Product$products_hardwareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_hardware
     */
    select?: products_hardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_hardware
     */
    omit?: products_hardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_hardwareInclude<ExtArgs> | null
    where?: products_hardwareWhereInput
    orderBy?: products_hardwareOrderByWithRelationInput | products_hardwareOrderByWithRelationInput[]
    cursor?: products_hardwareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Products_hardwareScalarFieldEnum | Products_hardwareScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model product_tags
   */

  export type AggregateProduct_tags = {
    _count: Product_tagsCountAggregateOutputType | null
    _min: Product_tagsMinAggregateOutputType | null
    _max: Product_tagsMaxAggregateOutputType | null
  }

  export type Product_tagsMinAggregateOutputType = {
    product_id: string | null
    tag_id: string | null
    product_name: string | null
    tag_spec: string | null
    tag_size: string | null
  }

  export type Product_tagsMaxAggregateOutputType = {
    product_id: string | null
    tag_id: string | null
    product_name: string | null
    tag_spec: string | null
    tag_size: string | null
  }

  export type Product_tagsCountAggregateOutputType = {
    product_id: number
    tag_id: number
    product_name: number
    tag_spec: number
    tag_size: number
    _all: number
  }


  export type Product_tagsMinAggregateInputType = {
    product_id?: true
    tag_id?: true
    product_name?: true
    tag_spec?: true
    tag_size?: true
  }

  export type Product_tagsMaxAggregateInputType = {
    product_id?: true
    tag_id?: true
    product_name?: true
    tag_spec?: true
    tag_size?: true
  }

  export type Product_tagsCountAggregateInputType = {
    product_id?: true
    tag_id?: true
    product_name?: true
    tag_spec?: true
    tag_size?: true
    _all?: true
  }

  export type Product_tagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_tags to aggregate.
     */
    where?: product_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_tags to fetch.
     */
    orderBy?: product_tagsOrderByWithRelationInput | product_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_tags
    **/
    _count?: true | Product_tagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_tagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_tagsMaxAggregateInputType
  }

  export type GetProduct_tagsAggregateType<T extends Product_tagsAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_tags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_tags[P]>
      : GetScalarType<T[P], AggregateProduct_tags[P]>
  }




  export type product_tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_tagsWhereInput
    orderBy?: product_tagsOrderByWithAggregationInput | product_tagsOrderByWithAggregationInput[]
    by: Product_tagsScalarFieldEnum[] | Product_tagsScalarFieldEnum
    having?: product_tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_tagsCountAggregateInputType | true
    _min?: Product_tagsMinAggregateInputType
    _max?: Product_tagsMaxAggregateInputType
  }

  export type Product_tagsGroupByOutputType = {
    product_id: string
    tag_id: string
    product_name: string | null
    tag_spec: string | null
    tag_size: string | null
    _count: Product_tagsCountAggregateOutputType | null
    _min: Product_tagsMinAggregateOutputType | null
    _max: Product_tagsMaxAggregateOutputType | null
  }

  type GetProduct_tagsGroupByPayload<T extends product_tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_tagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_tagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_tagsGroupByOutputType[P]>
            : GetScalarType<T[P], Product_tagsGroupByOutputType[P]>
        }
      >
    >


  export type product_tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    tag_id?: boolean
    product_name?: boolean
    tag_spec?: boolean
    tag_size?: boolean
    products?: boolean | ProductDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_tags"]>

  export type product_tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    tag_id?: boolean
    product_name?: boolean
    tag_spec?: boolean
    tag_size?: boolean
    products?: boolean | ProductDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_tags"]>

  export type product_tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    tag_id?: boolean
    product_name?: boolean
    tag_spec?: boolean
    tag_size?: boolean
    products?: boolean | ProductDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_tags"]>

  export type product_tagsSelectScalar = {
    product_id?: boolean
    tag_id?: boolean
    product_name?: boolean
    tag_spec?: boolean
    tag_size?: boolean
  }

  export type product_tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"product_id" | "tag_id" | "product_name" | "tag_spec" | "tag_size", ExtArgs["result"]["product_tags"]>
  export type product_tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }
  export type product_tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }
  export type product_tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }

  export type $product_tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_tags"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>
      tags: Prisma.$tagsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: string
      tag_id: string
      product_name: string | null
      tag_spec: string | null
      tag_size: string | null
    }, ExtArgs["result"]["product_tags"]>
    composites: {}
  }

  type product_tagsGetPayload<S extends boolean | null | undefined | product_tagsDefaultArgs> = $Result.GetResult<Prisma.$product_tagsPayload, S>

  type product_tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<product_tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Product_tagsCountAggregateInputType | true
    }

  export interface product_tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_tags'], meta: { name: 'product_tags' } }
    /**
     * Find zero or one Product_tags that matches the filter.
     * @param {product_tagsFindUniqueArgs} args - Arguments to find a Product_tags
     * @example
     * // Get one Product_tags
     * const product_tags = await prisma.product_tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_tagsFindUniqueArgs>(args: SelectSubset<T, product_tagsFindUniqueArgs<ExtArgs>>): Prisma__product_tagsClient<$Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product_tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {product_tagsFindUniqueOrThrowArgs} args - Arguments to find a Product_tags
     * @example
     * // Get one Product_tags
     * const product_tags = await prisma.product_tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, product_tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_tagsClient<$Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_tagsFindFirstArgs} args - Arguments to find a Product_tags
     * @example
     * // Get one Product_tags
     * const product_tags = await prisma.product_tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_tagsFindFirstArgs>(args?: SelectSubset<T, product_tagsFindFirstArgs<ExtArgs>>): Prisma__product_tagsClient<$Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_tagsFindFirstOrThrowArgs} args - Arguments to find a Product_tags
     * @example
     * // Get one Product_tags
     * const product_tags = await prisma.product_tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, product_tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_tagsClient<$Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Product_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_tags
     * const product_tags = await prisma.product_tags.findMany()
     * 
     * // Get first 10 Product_tags
     * const product_tags = await prisma.product_tags.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const product_tagsWithProduct_idOnly = await prisma.product_tags.findMany({ select: { product_id: true } })
     * 
     */
    findMany<T extends product_tagsFindManyArgs>(args?: SelectSubset<T, product_tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product_tags.
     * @param {product_tagsCreateArgs} args - Arguments to create a Product_tags.
     * @example
     * // Create one Product_tags
     * const Product_tags = await prisma.product_tags.create({
     *   data: {
     *     // ... data to create a Product_tags
     *   }
     * })
     * 
     */
    create<T extends product_tagsCreateArgs>(args: SelectSubset<T, product_tagsCreateArgs<ExtArgs>>): Prisma__product_tagsClient<$Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Product_tags.
     * @param {product_tagsCreateManyArgs} args - Arguments to create many Product_tags.
     * @example
     * // Create many Product_tags
     * const product_tags = await prisma.product_tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_tagsCreateManyArgs>(args?: SelectSubset<T, product_tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Product_tags and returns the data saved in the database.
     * @param {product_tagsCreateManyAndReturnArgs} args - Arguments to create many Product_tags.
     * @example
     * // Create many Product_tags
     * const product_tags = await prisma.product_tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Product_tags and only return the `product_id`
     * const product_tagsWithProduct_idOnly = await prisma.product_tags.createManyAndReturn({
     *   select: { product_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends product_tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, product_tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product_tags.
     * @param {product_tagsDeleteArgs} args - Arguments to delete one Product_tags.
     * @example
     * // Delete one Product_tags
     * const Product_tags = await prisma.product_tags.delete({
     *   where: {
     *     // ... filter to delete one Product_tags
     *   }
     * })
     * 
     */
    delete<T extends product_tagsDeleteArgs>(args: SelectSubset<T, product_tagsDeleteArgs<ExtArgs>>): Prisma__product_tagsClient<$Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product_tags.
     * @param {product_tagsUpdateArgs} args - Arguments to update one Product_tags.
     * @example
     * // Update one Product_tags
     * const product_tags = await prisma.product_tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_tagsUpdateArgs>(args: SelectSubset<T, product_tagsUpdateArgs<ExtArgs>>): Prisma__product_tagsClient<$Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Product_tags.
     * @param {product_tagsDeleteManyArgs} args - Arguments to filter Product_tags to delete.
     * @example
     * // Delete a few Product_tags
     * const { count } = await prisma.product_tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_tagsDeleteManyArgs>(args?: SelectSubset<T, product_tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_tags
     * const product_tags = await prisma.product_tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_tagsUpdateManyArgs>(args: SelectSubset<T, product_tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_tags and returns the data updated in the database.
     * @param {product_tagsUpdateManyAndReturnArgs} args - Arguments to update many Product_tags.
     * @example
     * // Update many Product_tags
     * const product_tags = await prisma.product_tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Product_tags and only return the `product_id`
     * const product_tagsWithProduct_idOnly = await prisma.product_tags.updateManyAndReturn({
     *   select: { product_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends product_tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, product_tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product_tags.
     * @param {product_tagsUpsertArgs} args - Arguments to update or create a Product_tags.
     * @example
     * // Update or create a Product_tags
     * const product_tags = await prisma.product_tags.upsert({
     *   create: {
     *     // ... data to create a Product_tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_tags we want to update
     *   }
     * })
     */
    upsert<T extends product_tagsUpsertArgs>(args: SelectSubset<T, product_tagsUpsertArgs<ExtArgs>>): Prisma__product_tagsClient<$Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Product_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_tagsCountArgs} args - Arguments to filter Product_tags to count.
     * @example
     * // Count the number of Product_tags
     * const count = await prisma.product_tags.count({
     *   where: {
     *     // ... the filter for the Product_tags we want to count
     *   }
     * })
    **/
    count<T extends product_tagsCountArgs>(
      args?: Subset<T, product_tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_tagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_tagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Product_tagsAggregateArgs>(args: Subset<T, Product_tagsAggregateArgs>): Prisma.PrismaPromise<GetProduct_tagsAggregateType<T>>

    /**
     * Group by Product_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_tagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends product_tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_tagsGroupByArgs['orderBy'] }
        : { orderBy?: product_tagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, product_tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_tagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_tags model
   */
  readonly fields: product_tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends tagsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagsDefaultArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product_tags model
   */
  interface product_tagsFieldRefs {
    readonly product_id: FieldRef<"product_tags", 'String'>
    readonly tag_id: FieldRef<"product_tags", 'String'>
    readonly product_name: FieldRef<"product_tags", 'String'>
    readonly tag_spec: FieldRef<"product_tags", 'String'>
    readonly tag_size: FieldRef<"product_tags", 'String'>
  }
    

  // Custom InputTypes
  /**
   * product_tags findUnique
   */
  export type product_tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_tags
     */
    select?: product_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_tags
     */
    omit?: product_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_tagsInclude<ExtArgs> | null
    /**
     * Filter, which product_tags to fetch.
     */
    where: product_tagsWhereUniqueInput
  }

  /**
   * product_tags findUniqueOrThrow
   */
  export type product_tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_tags
     */
    select?: product_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_tags
     */
    omit?: product_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_tagsInclude<ExtArgs> | null
    /**
     * Filter, which product_tags to fetch.
     */
    where: product_tagsWhereUniqueInput
  }

  /**
   * product_tags findFirst
   */
  export type product_tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_tags
     */
    select?: product_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_tags
     */
    omit?: product_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_tagsInclude<ExtArgs> | null
    /**
     * Filter, which product_tags to fetch.
     */
    where?: product_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_tags to fetch.
     */
    orderBy?: product_tagsOrderByWithRelationInput | product_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_tags.
     */
    cursor?: product_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_tags.
     */
    distinct?: Product_tagsScalarFieldEnum | Product_tagsScalarFieldEnum[]
  }

  /**
   * product_tags findFirstOrThrow
   */
  export type product_tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_tags
     */
    select?: product_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_tags
     */
    omit?: product_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_tagsInclude<ExtArgs> | null
    /**
     * Filter, which product_tags to fetch.
     */
    where?: product_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_tags to fetch.
     */
    orderBy?: product_tagsOrderByWithRelationInput | product_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_tags.
     */
    cursor?: product_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_tags.
     */
    distinct?: Product_tagsScalarFieldEnum | Product_tagsScalarFieldEnum[]
  }

  /**
   * product_tags findMany
   */
  export type product_tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_tags
     */
    select?: product_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_tags
     */
    omit?: product_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_tagsInclude<ExtArgs> | null
    /**
     * Filter, which product_tags to fetch.
     */
    where?: product_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_tags to fetch.
     */
    orderBy?: product_tagsOrderByWithRelationInput | product_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_tags.
     */
    cursor?: product_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_tags.
     */
    skip?: number
    distinct?: Product_tagsScalarFieldEnum | Product_tagsScalarFieldEnum[]
  }

  /**
   * product_tags create
   */
  export type product_tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_tags
     */
    select?: product_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_tags
     */
    omit?: product_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a product_tags.
     */
    data: XOR<product_tagsCreateInput, product_tagsUncheckedCreateInput>
  }

  /**
   * product_tags createMany
   */
  export type product_tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_tags.
     */
    data: product_tagsCreateManyInput | product_tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_tags createManyAndReturn
   */
  export type product_tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_tags
     */
    select?: product_tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_tags
     */
    omit?: product_tagsOmit<ExtArgs> | null
    /**
     * The data used to create many product_tags.
     */
    data: product_tagsCreateManyInput | product_tagsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_tagsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_tags update
   */
  export type product_tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_tags
     */
    select?: product_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_tags
     */
    omit?: product_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a product_tags.
     */
    data: XOR<product_tagsUpdateInput, product_tagsUncheckedUpdateInput>
    /**
     * Choose, which product_tags to update.
     */
    where: product_tagsWhereUniqueInput
  }

  /**
   * product_tags updateMany
   */
  export type product_tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_tags.
     */
    data: XOR<product_tagsUpdateManyMutationInput, product_tagsUncheckedUpdateManyInput>
    /**
     * Filter which product_tags to update
     */
    where?: product_tagsWhereInput
    /**
     * Limit how many product_tags to update.
     */
    limit?: number
  }

  /**
   * product_tags updateManyAndReturn
   */
  export type product_tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_tags
     */
    select?: product_tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_tags
     */
    omit?: product_tagsOmit<ExtArgs> | null
    /**
     * The data used to update product_tags.
     */
    data: XOR<product_tagsUpdateManyMutationInput, product_tagsUncheckedUpdateManyInput>
    /**
     * Filter which product_tags to update
     */
    where?: product_tagsWhereInput
    /**
     * Limit how many product_tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_tagsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_tags upsert
   */
  export type product_tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_tags
     */
    select?: product_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_tags
     */
    omit?: product_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the product_tags to update in case it exists.
     */
    where: product_tagsWhereUniqueInput
    /**
     * In case the product_tags found by the `where` argument doesn't exist, create a new product_tags with this data.
     */
    create: XOR<product_tagsCreateInput, product_tagsUncheckedCreateInput>
    /**
     * In case the product_tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_tagsUpdateInput, product_tagsUncheckedUpdateInput>
  }

  /**
   * product_tags delete
   */
  export type product_tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_tags
     */
    select?: product_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_tags
     */
    omit?: product_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_tagsInclude<ExtArgs> | null
    /**
     * Filter which product_tags to delete.
     */
    where: product_tagsWhereUniqueInput
  }

  /**
   * product_tags deleteMany
   */
  export type product_tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_tags to delete
     */
    where?: product_tagsWhereInput
    /**
     * Limit how many product_tags to delete.
     */
    limit?: number
  }

  /**
   * product_tags without action
   */
  export type product_tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_tags
     */
    select?: product_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_tags
     */
    omit?: product_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_tagsInclude<ExtArgs> | null
  }


  /**
   * Model products_hardware
   */

  export type AggregateProducts_hardware = {
    _count: Products_hardwareCountAggregateOutputType | null
    _avg: Products_hardwareAvgAggregateOutputType | null
    _sum: Products_hardwareSumAggregateOutputType | null
    _min: Products_hardwareMinAggregateOutputType | null
    _max: Products_hardwareMaxAggregateOutputType | null
  }

  export type Products_hardwareAvgAggregateOutputType = {
    controller_count: number | null
    cpu_count: number | null
    cpu_cores: number | null
    cpu_base_clock: Decimal | null
    cpu_turbo_clock: Decimal | null
    memory_slots: number | null
    disk_bays: number | null
    disk_bays_max: number | null
    lan_rj45_1G: number | null
    lan_rj45_2_5G: number | null
    lan_rj45_10G: number | null
    max_lax_ports: number | null
    usb_3_2_prots: number | null
    expansion_ports: number | null
    cpu_threads: number | null
  }

  export type Products_hardwareSumAggregateOutputType = {
    controller_count: number | null
    cpu_count: number | null
    cpu_cores: number | null
    cpu_base_clock: Decimal | null
    cpu_turbo_clock: Decimal | null
    memory_slots: number | null
    disk_bays: number | null
    disk_bays_max: number | null
    lan_rj45_1G: number | null
    lan_rj45_2_5G: number | null
    lan_rj45_10G: number | null
    max_lax_ports: number | null
    usb_3_2_prots: number | null
    expansion_ports: number | null
    cpu_threads: number | null
  }

  export type Products_hardwareMinAggregateOutputType = {
    id: string | null
    products_id: string | null
    controller_count: number | null
    cpu_model: string | null
    cpu_count: number | null
    cpu_cores: number | null
    cpu_architecture: string | null
    cpu_base_clock: Decimal | null
    cpu_turbo_clock: Decimal | null
    hardware_encryption: string | null
    memory_total: string | null
    memory_installed: string | null
    memory_slots: number | null
    disk_bays: number | null
    disk_bays_max: number | null
    m2_slot: boolean | null
    disk_host_swappable: boolean | null
    lan_rj45_1G: number | null
    lan_rj45_2_5G: number | null
    lan_rj45_10G: number | null
    management_prot: boolean | null
    max_lax_ports: number | null
    usb_3_2_prots: number | null
    expansion_ports: number | null
    expansion_port_types: string | null
    pcie_expansion: string | null
    chassis_type: string | null
    dimensions: string | null
    rack_mount_kit: string | null
    fan_size: string | null
    fan_replaceable: boolean | null
    led_brightness_adj: boolean | null
    auto_power_recovery: boolean | null
    noise_lenel: string | null
    scheduled_power: boolean | null
    wake_on_lan: boolean | null
    dual_power_supply: boolean | null
    ac_input_voltage: string | null
    frequency: string | null
    power_consumption: string | null
    working_temperature: string | null
    storage_temperature: string | null
    relative_humidity: string | null
    warranty: string | null
    environmental_compliance: string | null
    cpu_threads: number | null
  }

  export type Products_hardwareMaxAggregateOutputType = {
    id: string | null
    products_id: string | null
    controller_count: number | null
    cpu_model: string | null
    cpu_count: number | null
    cpu_cores: number | null
    cpu_architecture: string | null
    cpu_base_clock: Decimal | null
    cpu_turbo_clock: Decimal | null
    hardware_encryption: string | null
    memory_total: string | null
    memory_installed: string | null
    memory_slots: number | null
    disk_bays: number | null
    disk_bays_max: number | null
    m2_slot: boolean | null
    disk_host_swappable: boolean | null
    lan_rj45_1G: number | null
    lan_rj45_2_5G: number | null
    lan_rj45_10G: number | null
    management_prot: boolean | null
    max_lax_ports: number | null
    usb_3_2_prots: number | null
    expansion_ports: number | null
    expansion_port_types: string | null
    pcie_expansion: string | null
    chassis_type: string | null
    dimensions: string | null
    rack_mount_kit: string | null
    fan_size: string | null
    fan_replaceable: boolean | null
    led_brightness_adj: boolean | null
    auto_power_recovery: boolean | null
    noise_lenel: string | null
    scheduled_power: boolean | null
    wake_on_lan: boolean | null
    dual_power_supply: boolean | null
    ac_input_voltage: string | null
    frequency: string | null
    power_consumption: string | null
    working_temperature: string | null
    storage_temperature: string | null
    relative_humidity: string | null
    warranty: string | null
    environmental_compliance: string | null
    cpu_threads: number | null
  }

  export type Products_hardwareCountAggregateOutputType = {
    id: number
    products_id: number
    controller_count: number
    cpu_model: number
    cpu_count: number
    cpu_cores: number
    cpu_architecture: number
    cpu_base_clock: number
    cpu_turbo_clock: number
    hardware_encryption: number
    memory_total: number
    memory_installed: number
    memory_slots: number
    memory_max: number
    disk_bays: number
    disk_bays_max: number
    disk_types_supported: number
    m2_slot: number
    disk_host_swappable: number
    lan_rj45_1G: number
    lan_rj45_2_5G: number
    lan_rj45_10G: number
    management_prot: number
    max_lax_ports: number
    usb_3_2_prots: number
    expansion_ports: number
    expansion_port_types: number
    pcie_expansion: number
    chassis_type: number
    dimensions: number
    rack_mount_kit: number
    fan_size: number
    fan_replaceable: number
    led_brightness_adj: number
    auto_power_recovery: number
    noise_lenel: number
    scheduled_power: number
    wake_on_lan: number
    dual_power_supply: number
    ac_input_voltage: number
    frequency: number
    power_consumption: number
    working_temperature: number
    storage_temperature: number
    relative_humidity: number
    certifications: number
    warranty: number
    environmental_compliance: number
    package_contents: number
    optional_accessories: number
    cpu_threads: number
    _all: number
  }


  export type Products_hardwareAvgAggregateInputType = {
    controller_count?: true
    cpu_count?: true
    cpu_cores?: true
    cpu_base_clock?: true
    cpu_turbo_clock?: true
    memory_slots?: true
    disk_bays?: true
    disk_bays_max?: true
    lan_rj45_1G?: true
    lan_rj45_2_5G?: true
    lan_rj45_10G?: true
    max_lax_ports?: true
    usb_3_2_prots?: true
    expansion_ports?: true
    cpu_threads?: true
  }

  export type Products_hardwareSumAggregateInputType = {
    controller_count?: true
    cpu_count?: true
    cpu_cores?: true
    cpu_base_clock?: true
    cpu_turbo_clock?: true
    memory_slots?: true
    disk_bays?: true
    disk_bays_max?: true
    lan_rj45_1G?: true
    lan_rj45_2_5G?: true
    lan_rj45_10G?: true
    max_lax_ports?: true
    usb_3_2_prots?: true
    expansion_ports?: true
    cpu_threads?: true
  }

  export type Products_hardwareMinAggregateInputType = {
    id?: true
    products_id?: true
    controller_count?: true
    cpu_model?: true
    cpu_count?: true
    cpu_cores?: true
    cpu_architecture?: true
    cpu_base_clock?: true
    cpu_turbo_clock?: true
    hardware_encryption?: true
    memory_total?: true
    memory_installed?: true
    memory_slots?: true
    disk_bays?: true
    disk_bays_max?: true
    m2_slot?: true
    disk_host_swappable?: true
    lan_rj45_1G?: true
    lan_rj45_2_5G?: true
    lan_rj45_10G?: true
    management_prot?: true
    max_lax_ports?: true
    usb_3_2_prots?: true
    expansion_ports?: true
    expansion_port_types?: true
    pcie_expansion?: true
    chassis_type?: true
    dimensions?: true
    rack_mount_kit?: true
    fan_size?: true
    fan_replaceable?: true
    led_brightness_adj?: true
    auto_power_recovery?: true
    noise_lenel?: true
    scheduled_power?: true
    wake_on_lan?: true
    dual_power_supply?: true
    ac_input_voltage?: true
    frequency?: true
    power_consumption?: true
    working_temperature?: true
    storage_temperature?: true
    relative_humidity?: true
    warranty?: true
    environmental_compliance?: true
    cpu_threads?: true
  }

  export type Products_hardwareMaxAggregateInputType = {
    id?: true
    products_id?: true
    controller_count?: true
    cpu_model?: true
    cpu_count?: true
    cpu_cores?: true
    cpu_architecture?: true
    cpu_base_clock?: true
    cpu_turbo_clock?: true
    hardware_encryption?: true
    memory_total?: true
    memory_installed?: true
    memory_slots?: true
    disk_bays?: true
    disk_bays_max?: true
    m2_slot?: true
    disk_host_swappable?: true
    lan_rj45_1G?: true
    lan_rj45_2_5G?: true
    lan_rj45_10G?: true
    management_prot?: true
    max_lax_ports?: true
    usb_3_2_prots?: true
    expansion_ports?: true
    expansion_port_types?: true
    pcie_expansion?: true
    chassis_type?: true
    dimensions?: true
    rack_mount_kit?: true
    fan_size?: true
    fan_replaceable?: true
    led_brightness_adj?: true
    auto_power_recovery?: true
    noise_lenel?: true
    scheduled_power?: true
    wake_on_lan?: true
    dual_power_supply?: true
    ac_input_voltage?: true
    frequency?: true
    power_consumption?: true
    working_temperature?: true
    storage_temperature?: true
    relative_humidity?: true
    warranty?: true
    environmental_compliance?: true
    cpu_threads?: true
  }

  export type Products_hardwareCountAggregateInputType = {
    id?: true
    products_id?: true
    controller_count?: true
    cpu_model?: true
    cpu_count?: true
    cpu_cores?: true
    cpu_architecture?: true
    cpu_base_clock?: true
    cpu_turbo_clock?: true
    hardware_encryption?: true
    memory_total?: true
    memory_installed?: true
    memory_slots?: true
    memory_max?: true
    disk_bays?: true
    disk_bays_max?: true
    disk_types_supported?: true
    m2_slot?: true
    disk_host_swappable?: true
    lan_rj45_1G?: true
    lan_rj45_2_5G?: true
    lan_rj45_10G?: true
    management_prot?: true
    max_lax_ports?: true
    usb_3_2_prots?: true
    expansion_ports?: true
    expansion_port_types?: true
    pcie_expansion?: true
    chassis_type?: true
    dimensions?: true
    rack_mount_kit?: true
    fan_size?: true
    fan_replaceable?: true
    led_brightness_adj?: true
    auto_power_recovery?: true
    noise_lenel?: true
    scheduled_power?: true
    wake_on_lan?: true
    dual_power_supply?: true
    ac_input_voltage?: true
    frequency?: true
    power_consumption?: true
    working_temperature?: true
    storage_temperature?: true
    relative_humidity?: true
    certifications?: true
    warranty?: true
    environmental_compliance?: true
    package_contents?: true
    optional_accessories?: true
    cpu_threads?: true
    _all?: true
  }

  export type Products_hardwareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products_hardware to aggregate.
     */
    where?: products_hardwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products_hardwares to fetch.
     */
    orderBy?: products_hardwareOrderByWithRelationInput | products_hardwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: products_hardwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products_hardwares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products_hardwares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products_hardwares
    **/
    _count?: true | Products_hardwareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Products_hardwareAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Products_hardwareSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Products_hardwareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Products_hardwareMaxAggregateInputType
  }

  export type GetProducts_hardwareAggregateType<T extends Products_hardwareAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts_hardware]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts_hardware[P]>
      : GetScalarType<T[P], AggregateProducts_hardware[P]>
  }




  export type products_hardwareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: products_hardwareWhereInput
    orderBy?: products_hardwareOrderByWithAggregationInput | products_hardwareOrderByWithAggregationInput[]
    by: Products_hardwareScalarFieldEnum[] | Products_hardwareScalarFieldEnum
    having?: products_hardwareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Products_hardwareCountAggregateInputType | true
    _avg?: Products_hardwareAvgAggregateInputType
    _sum?: Products_hardwareSumAggregateInputType
    _min?: Products_hardwareMinAggregateInputType
    _max?: Products_hardwareMaxAggregateInputType
  }

  export type Products_hardwareGroupByOutputType = {
    id: string
    products_id: string
    controller_count: number | null
    cpu_model: string | null
    cpu_count: number | null
    cpu_cores: number | null
    cpu_architecture: string | null
    cpu_base_clock: Decimal | null
    cpu_turbo_clock: Decimal | null
    hardware_encryption: string | null
    memory_total: string | null
    memory_installed: string | null
    memory_slots: number | null
    memory_max: JsonValue | null
    disk_bays: number | null
    disk_bays_max: number | null
    disk_types_supported: JsonValue | null
    m2_slot: boolean | null
    disk_host_swappable: boolean | null
    lan_rj45_1G: number | null
    lan_rj45_2_5G: number | null
    lan_rj45_10G: number | null
    management_prot: boolean | null
    max_lax_ports: number | null
    usb_3_2_prots: number | null
    expansion_ports: number | null
    expansion_port_types: string | null
    pcie_expansion: string | null
    chassis_type: string | null
    dimensions: string | null
    rack_mount_kit: string | null
    fan_size: string | null
    fan_replaceable: boolean | null
    led_brightness_adj: boolean | null
    auto_power_recovery: boolean | null
    noise_lenel: string | null
    scheduled_power: boolean | null
    wake_on_lan: boolean | null
    dual_power_supply: boolean | null
    ac_input_voltage: string | null
    frequency: string | null
    power_consumption: string | null
    working_temperature: string | null
    storage_temperature: string | null
    relative_humidity: string | null
    certifications: JsonValue | null
    warranty: string | null
    environmental_compliance: string | null
    package_contents: JsonValue | null
    optional_accessories: JsonValue | null
    cpu_threads: number | null
    _count: Products_hardwareCountAggregateOutputType | null
    _avg: Products_hardwareAvgAggregateOutputType | null
    _sum: Products_hardwareSumAggregateOutputType | null
    _min: Products_hardwareMinAggregateOutputType | null
    _max: Products_hardwareMaxAggregateOutputType | null
  }

  type GetProducts_hardwareGroupByPayload<T extends products_hardwareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Products_hardwareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Products_hardwareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Products_hardwareGroupByOutputType[P]>
            : GetScalarType<T[P], Products_hardwareGroupByOutputType[P]>
        }
      >
    >


  export type products_hardwareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    products_id?: boolean
    controller_count?: boolean
    cpu_model?: boolean
    cpu_count?: boolean
    cpu_cores?: boolean
    cpu_architecture?: boolean
    cpu_base_clock?: boolean
    cpu_turbo_clock?: boolean
    hardware_encryption?: boolean
    memory_total?: boolean
    memory_installed?: boolean
    memory_slots?: boolean
    memory_max?: boolean
    disk_bays?: boolean
    disk_bays_max?: boolean
    disk_types_supported?: boolean
    m2_slot?: boolean
    disk_host_swappable?: boolean
    lan_rj45_1G?: boolean
    lan_rj45_2_5G?: boolean
    lan_rj45_10G?: boolean
    management_prot?: boolean
    max_lax_ports?: boolean
    usb_3_2_prots?: boolean
    expansion_ports?: boolean
    expansion_port_types?: boolean
    pcie_expansion?: boolean
    chassis_type?: boolean
    dimensions?: boolean
    rack_mount_kit?: boolean
    fan_size?: boolean
    fan_replaceable?: boolean
    led_brightness_adj?: boolean
    auto_power_recovery?: boolean
    noise_lenel?: boolean
    scheduled_power?: boolean
    wake_on_lan?: boolean
    dual_power_supply?: boolean
    ac_input_voltage?: boolean
    frequency?: boolean
    power_consumption?: boolean
    working_temperature?: boolean
    storage_temperature?: boolean
    relative_humidity?: boolean
    certifications?: boolean
    warranty?: boolean
    environmental_compliance?: boolean
    package_contents?: boolean
    optional_accessories?: boolean
    cpu_threads?: boolean
    products?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products_hardware"]>

  export type products_hardwareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    products_id?: boolean
    controller_count?: boolean
    cpu_model?: boolean
    cpu_count?: boolean
    cpu_cores?: boolean
    cpu_architecture?: boolean
    cpu_base_clock?: boolean
    cpu_turbo_clock?: boolean
    hardware_encryption?: boolean
    memory_total?: boolean
    memory_installed?: boolean
    memory_slots?: boolean
    memory_max?: boolean
    disk_bays?: boolean
    disk_bays_max?: boolean
    disk_types_supported?: boolean
    m2_slot?: boolean
    disk_host_swappable?: boolean
    lan_rj45_1G?: boolean
    lan_rj45_2_5G?: boolean
    lan_rj45_10G?: boolean
    management_prot?: boolean
    max_lax_ports?: boolean
    usb_3_2_prots?: boolean
    expansion_ports?: boolean
    expansion_port_types?: boolean
    pcie_expansion?: boolean
    chassis_type?: boolean
    dimensions?: boolean
    rack_mount_kit?: boolean
    fan_size?: boolean
    fan_replaceable?: boolean
    led_brightness_adj?: boolean
    auto_power_recovery?: boolean
    noise_lenel?: boolean
    scheduled_power?: boolean
    wake_on_lan?: boolean
    dual_power_supply?: boolean
    ac_input_voltage?: boolean
    frequency?: boolean
    power_consumption?: boolean
    working_temperature?: boolean
    storage_temperature?: boolean
    relative_humidity?: boolean
    certifications?: boolean
    warranty?: boolean
    environmental_compliance?: boolean
    package_contents?: boolean
    optional_accessories?: boolean
    cpu_threads?: boolean
    products?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products_hardware"]>

  export type products_hardwareSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    products_id?: boolean
    controller_count?: boolean
    cpu_model?: boolean
    cpu_count?: boolean
    cpu_cores?: boolean
    cpu_architecture?: boolean
    cpu_base_clock?: boolean
    cpu_turbo_clock?: boolean
    hardware_encryption?: boolean
    memory_total?: boolean
    memory_installed?: boolean
    memory_slots?: boolean
    memory_max?: boolean
    disk_bays?: boolean
    disk_bays_max?: boolean
    disk_types_supported?: boolean
    m2_slot?: boolean
    disk_host_swappable?: boolean
    lan_rj45_1G?: boolean
    lan_rj45_2_5G?: boolean
    lan_rj45_10G?: boolean
    management_prot?: boolean
    max_lax_ports?: boolean
    usb_3_2_prots?: boolean
    expansion_ports?: boolean
    expansion_port_types?: boolean
    pcie_expansion?: boolean
    chassis_type?: boolean
    dimensions?: boolean
    rack_mount_kit?: boolean
    fan_size?: boolean
    fan_replaceable?: boolean
    led_brightness_adj?: boolean
    auto_power_recovery?: boolean
    noise_lenel?: boolean
    scheduled_power?: boolean
    wake_on_lan?: boolean
    dual_power_supply?: boolean
    ac_input_voltage?: boolean
    frequency?: boolean
    power_consumption?: boolean
    working_temperature?: boolean
    storage_temperature?: boolean
    relative_humidity?: boolean
    certifications?: boolean
    warranty?: boolean
    environmental_compliance?: boolean
    package_contents?: boolean
    optional_accessories?: boolean
    cpu_threads?: boolean
    products?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products_hardware"]>

  export type products_hardwareSelectScalar = {
    id?: boolean
    products_id?: boolean
    controller_count?: boolean
    cpu_model?: boolean
    cpu_count?: boolean
    cpu_cores?: boolean
    cpu_architecture?: boolean
    cpu_base_clock?: boolean
    cpu_turbo_clock?: boolean
    hardware_encryption?: boolean
    memory_total?: boolean
    memory_installed?: boolean
    memory_slots?: boolean
    memory_max?: boolean
    disk_bays?: boolean
    disk_bays_max?: boolean
    disk_types_supported?: boolean
    m2_slot?: boolean
    disk_host_swappable?: boolean
    lan_rj45_1G?: boolean
    lan_rj45_2_5G?: boolean
    lan_rj45_10G?: boolean
    management_prot?: boolean
    max_lax_ports?: boolean
    usb_3_2_prots?: boolean
    expansion_ports?: boolean
    expansion_port_types?: boolean
    pcie_expansion?: boolean
    chassis_type?: boolean
    dimensions?: boolean
    rack_mount_kit?: boolean
    fan_size?: boolean
    fan_replaceable?: boolean
    led_brightness_adj?: boolean
    auto_power_recovery?: boolean
    noise_lenel?: boolean
    scheduled_power?: boolean
    wake_on_lan?: boolean
    dual_power_supply?: boolean
    ac_input_voltage?: boolean
    frequency?: boolean
    power_consumption?: boolean
    working_temperature?: boolean
    storage_temperature?: boolean
    relative_humidity?: boolean
    certifications?: boolean
    warranty?: boolean
    environmental_compliance?: boolean
    package_contents?: boolean
    optional_accessories?: boolean
    cpu_threads?: boolean
  }

  export type products_hardwareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "products_id" | "controller_count" | "cpu_model" | "cpu_count" | "cpu_cores" | "cpu_architecture" | "cpu_base_clock" | "cpu_turbo_clock" | "hardware_encryption" | "memory_total" | "memory_installed" | "memory_slots" | "memory_max" | "disk_bays" | "disk_bays_max" | "disk_types_supported" | "m2_slot" | "disk_host_swappable" | "lan_rj45_1G" | "lan_rj45_2_5G" | "lan_rj45_10G" | "management_prot" | "max_lax_ports" | "usb_3_2_prots" | "expansion_ports" | "expansion_port_types" | "pcie_expansion" | "chassis_type" | "dimensions" | "rack_mount_kit" | "fan_size" | "fan_replaceable" | "led_brightness_adj" | "auto_power_recovery" | "noise_lenel" | "scheduled_power" | "wake_on_lan" | "dual_power_supply" | "ac_input_voltage" | "frequency" | "power_consumption" | "working_temperature" | "storage_temperature" | "relative_humidity" | "certifications" | "warranty" | "environmental_compliance" | "package_contents" | "optional_accessories" | "cpu_threads", ExtArgs["result"]["products_hardware"]>
  export type products_hardwareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type products_hardwareIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type products_hardwareIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $products_hardwarePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products_hardware"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      products_id: string
      controller_count: number | null
      cpu_model: string | null
      cpu_count: number | null
      cpu_cores: number | null
      cpu_architecture: string | null
      cpu_base_clock: Prisma.Decimal | null
      cpu_turbo_clock: Prisma.Decimal | null
      hardware_encryption: string | null
      memory_total: string | null
      memory_installed: string | null
      memory_slots: number | null
      memory_max: Prisma.JsonValue | null
      disk_bays: number | null
      disk_bays_max: number | null
      disk_types_supported: Prisma.JsonValue | null
      m2_slot: boolean | null
      disk_host_swappable: boolean | null
      lan_rj45_1G: number | null
      lan_rj45_2_5G: number | null
      lan_rj45_10G: number | null
      management_prot: boolean | null
      max_lax_ports: number | null
      usb_3_2_prots: number | null
      expansion_ports: number | null
      expansion_port_types: string | null
      pcie_expansion: string | null
      chassis_type: string | null
      dimensions: string | null
      rack_mount_kit: string | null
      fan_size: string | null
      fan_replaceable: boolean | null
      led_brightness_adj: boolean | null
      auto_power_recovery: boolean | null
      noise_lenel: string | null
      scheduled_power: boolean | null
      wake_on_lan: boolean | null
      dual_power_supply: boolean | null
      ac_input_voltage: string | null
      frequency: string | null
      power_consumption: string | null
      working_temperature: string | null
      storage_temperature: string | null
      relative_humidity: string | null
      certifications: Prisma.JsonValue | null
      warranty: string | null
      environmental_compliance: string | null
      package_contents: Prisma.JsonValue | null
      optional_accessories: Prisma.JsonValue | null
      cpu_threads: number | null
    }, ExtArgs["result"]["products_hardware"]>
    composites: {}
  }

  type products_hardwareGetPayload<S extends boolean | null | undefined | products_hardwareDefaultArgs> = $Result.GetResult<Prisma.$products_hardwarePayload, S>

  type products_hardwareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<products_hardwareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Products_hardwareCountAggregateInputType | true
    }

  export interface products_hardwareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products_hardware'], meta: { name: 'products_hardware' } }
    /**
     * Find zero or one Products_hardware that matches the filter.
     * @param {products_hardwareFindUniqueArgs} args - Arguments to find a Products_hardware
     * @example
     * // Get one Products_hardware
     * const products_hardware = await prisma.products_hardware.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends products_hardwareFindUniqueArgs>(args: SelectSubset<T, products_hardwareFindUniqueArgs<ExtArgs>>): Prisma__products_hardwareClient<$Result.GetResult<Prisma.$products_hardwarePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products_hardware that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {products_hardwareFindUniqueOrThrowArgs} args - Arguments to find a Products_hardware
     * @example
     * // Get one Products_hardware
     * const products_hardware = await prisma.products_hardware.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends products_hardwareFindUniqueOrThrowArgs>(args: SelectSubset<T, products_hardwareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__products_hardwareClient<$Result.GetResult<Prisma.$products_hardwarePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products_hardware that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_hardwareFindFirstArgs} args - Arguments to find a Products_hardware
     * @example
     * // Get one Products_hardware
     * const products_hardware = await prisma.products_hardware.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends products_hardwareFindFirstArgs>(args?: SelectSubset<T, products_hardwareFindFirstArgs<ExtArgs>>): Prisma__products_hardwareClient<$Result.GetResult<Prisma.$products_hardwarePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products_hardware that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_hardwareFindFirstOrThrowArgs} args - Arguments to find a Products_hardware
     * @example
     * // Get one Products_hardware
     * const products_hardware = await prisma.products_hardware.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends products_hardwareFindFirstOrThrowArgs>(args?: SelectSubset<T, products_hardwareFindFirstOrThrowArgs<ExtArgs>>): Prisma__products_hardwareClient<$Result.GetResult<Prisma.$products_hardwarePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products_hardwares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_hardwareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products_hardwares
     * const products_hardwares = await prisma.products_hardware.findMany()
     * 
     * // Get first 10 Products_hardwares
     * const products_hardwares = await prisma.products_hardware.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const products_hardwareWithIdOnly = await prisma.products_hardware.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends products_hardwareFindManyArgs>(args?: SelectSubset<T, products_hardwareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$products_hardwarePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products_hardware.
     * @param {products_hardwareCreateArgs} args - Arguments to create a Products_hardware.
     * @example
     * // Create one Products_hardware
     * const Products_hardware = await prisma.products_hardware.create({
     *   data: {
     *     // ... data to create a Products_hardware
     *   }
     * })
     * 
     */
    create<T extends products_hardwareCreateArgs>(args: SelectSubset<T, products_hardwareCreateArgs<ExtArgs>>): Prisma__products_hardwareClient<$Result.GetResult<Prisma.$products_hardwarePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products_hardwares.
     * @param {products_hardwareCreateManyArgs} args - Arguments to create many Products_hardwares.
     * @example
     * // Create many Products_hardwares
     * const products_hardware = await prisma.products_hardware.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends products_hardwareCreateManyArgs>(args?: SelectSubset<T, products_hardwareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products_hardwares and returns the data saved in the database.
     * @param {products_hardwareCreateManyAndReturnArgs} args - Arguments to create many Products_hardwares.
     * @example
     * // Create many Products_hardwares
     * const products_hardware = await prisma.products_hardware.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products_hardwares and only return the `id`
     * const products_hardwareWithIdOnly = await prisma.products_hardware.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends products_hardwareCreateManyAndReturnArgs>(args?: SelectSubset<T, products_hardwareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$products_hardwarePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products_hardware.
     * @param {products_hardwareDeleteArgs} args - Arguments to delete one Products_hardware.
     * @example
     * // Delete one Products_hardware
     * const Products_hardware = await prisma.products_hardware.delete({
     *   where: {
     *     // ... filter to delete one Products_hardware
     *   }
     * })
     * 
     */
    delete<T extends products_hardwareDeleteArgs>(args: SelectSubset<T, products_hardwareDeleteArgs<ExtArgs>>): Prisma__products_hardwareClient<$Result.GetResult<Prisma.$products_hardwarePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products_hardware.
     * @param {products_hardwareUpdateArgs} args - Arguments to update one Products_hardware.
     * @example
     * // Update one Products_hardware
     * const products_hardware = await prisma.products_hardware.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends products_hardwareUpdateArgs>(args: SelectSubset<T, products_hardwareUpdateArgs<ExtArgs>>): Prisma__products_hardwareClient<$Result.GetResult<Prisma.$products_hardwarePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products_hardwares.
     * @param {products_hardwareDeleteManyArgs} args - Arguments to filter Products_hardwares to delete.
     * @example
     * // Delete a few Products_hardwares
     * const { count } = await prisma.products_hardware.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends products_hardwareDeleteManyArgs>(args?: SelectSubset<T, products_hardwareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products_hardwares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_hardwareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products_hardwares
     * const products_hardware = await prisma.products_hardware.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends products_hardwareUpdateManyArgs>(args: SelectSubset<T, products_hardwareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products_hardwares and returns the data updated in the database.
     * @param {products_hardwareUpdateManyAndReturnArgs} args - Arguments to update many Products_hardwares.
     * @example
     * // Update many Products_hardwares
     * const products_hardware = await prisma.products_hardware.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products_hardwares and only return the `id`
     * const products_hardwareWithIdOnly = await prisma.products_hardware.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends products_hardwareUpdateManyAndReturnArgs>(args: SelectSubset<T, products_hardwareUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$products_hardwarePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products_hardware.
     * @param {products_hardwareUpsertArgs} args - Arguments to update or create a Products_hardware.
     * @example
     * // Update or create a Products_hardware
     * const products_hardware = await prisma.products_hardware.upsert({
     *   create: {
     *     // ... data to create a Products_hardware
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products_hardware we want to update
     *   }
     * })
     */
    upsert<T extends products_hardwareUpsertArgs>(args: SelectSubset<T, products_hardwareUpsertArgs<ExtArgs>>): Prisma__products_hardwareClient<$Result.GetResult<Prisma.$products_hardwarePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products_hardwares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_hardwareCountArgs} args - Arguments to filter Products_hardwares to count.
     * @example
     * // Count the number of Products_hardwares
     * const count = await prisma.products_hardware.count({
     *   where: {
     *     // ... the filter for the Products_hardwares we want to count
     *   }
     * })
    **/
    count<T extends products_hardwareCountArgs>(
      args?: Subset<T, products_hardwareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Products_hardwareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products_hardware.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_hardwareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Products_hardwareAggregateArgs>(args: Subset<T, Products_hardwareAggregateArgs>): Prisma.PrismaPromise<GetProducts_hardwareAggregateType<T>>

    /**
     * Group by Products_hardware.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_hardwareGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends products_hardwareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: products_hardwareGroupByArgs['orderBy'] }
        : { orderBy?: products_hardwareGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, products_hardwareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProducts_hardwareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products_hardware model
   */
  readonly fields: products_hardwareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products_hardware.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__products_hardwareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the products_hardware model
   */
  interface products_hardwareFieldRefs {
    readonly id: FieldRef<"products_hardware", 'String'>
    readonly products_id: FieldRef<"products_hardware", 'String'>
    readonly controller_count: FieldRef<"products_hardware", 'Int'>
    readonly cpu_model: FieldRef<"products_hardware", 'String'>
    readonly cpu_count: FieldRef<"products_hardware", 'Int'>
    readonly cpu_cores: FieldRef<"products_hardware", 'Int'>
    readonly cpu_architecture: FieldRef<"products_hardware", 'String'>
    readonly cpu_base_clock: FieldRef<"products_hardware", 'Decimal'>
    readonly cpu_turbo_clock: FieldRef<"products_hardware", 'Decimal'>
    readonly hardware_encryption: FieldRef<"products_hardware", 'String'>
    readonly memory_total: FieldRef<"products_hardware", 'String'>
    readonly memory_installed: FieldRef<"products_hardware", 'String'>
    readonly memory_slots: FieldRef<"products_hardware", 'Int'>
    readonly memory_max: FieldRef<"products_hardware", 'Json'>
    readonly disk_bays: FieldRef<"products_hardware", 'Int'>
    readonly disk_bays_max: FieldRef<"products_hardware", 'Int'>
    readonly disk_types_supported: FieldRef<"products_hardware", 'Json'>
    readonly m2_slot: FieldRef<"products_hardware", 'Boolean'>
    readonly disk_host_swappable: FieldRef<"products_hardware", 'Boolean'>
    readonly lan_rj45_1G: FieldRef<"products_hardware", 'Int'>
    readonly lan_rj45_2_5G: FieldRef<"products_hardware", 'Int'>
    readonly lan_rj45_10G: FieldRef<"products_hardware", 'Int'>
    readonly management_prot: FieldRef<"products_hardware", 'Boolean'>
    readonly max_lax_ports: FieldRef<"products_hardware", 'Int'>
    readonly usb_3_2_prots: FieldRef<"products_hardware", 'Int'>
    readonly expansion_ports: FieldRef<"products_hardware", 'Int'>
    readonly expansion_port_types: FieldRef<"products_hardware", 'String'>
    readonly pcie_expansion: FieldRef<"products_hardware", 'String'>
    readonly chassis_type: FieldRef<"products_hardware", 'String'>
    readonly dimensions: FieldRef<"products_hardware", 'String'>
    readonly rack_mount_kit: FieldRef<"products_hardware", 'String'>
    readonly fan_size: FieldRef<"products_hardware", 'String'>
    readonly fan_replaceable: FieldRef<"products_hardware", 'Boolean'>
    readonly led_brightness_adj: FieldRef<"products_hardware", 'Boolean'>
    readonly auto_power_recovery: FieldRef<"products_hardware", 'Boolean'>
    readonly noise_lenel: FieldRef<"products_hardware", 'String'>
    readonly scheduled_power: FieldRef<"products_hardware", 'Boolean'>
    readonly wake_on_lan: FieldRef<"products_hardware", 'Boolean'>
    readonly dual_power_supply: FieldRef<"products_hardware", 'Boolean'>
    readonly ac_input_voltage: FieldRef<"products_hardware", 'String'>
    readonly frequency: FieldRef<"products_hardware", 'String'>
    readonly power_consumption: FieldRef<"products_hardware", 'String'>
    readonly working_temperature: FieldRef<"products_hardware", 'String'>
    readonly storage_temperature: FieldRef<"products_hardware", 'String'>
    readonly relative_humidity: FieldRef<"products_hardware", 'String'>
    readonly certifications: FieldRef<"products_hardware", 'Json'>
    readonly warranty: FieldRef<"products_hardware", 'String'>
    readonly environmental_compliance: FieldRef<"products_hardware", 'String'>
    readonly package_contents: FieldRef<"products_hardware", 'Json'>
    readonly optional_accessories: FieldRef<"products_hardware", 'Json'>
    readonly cpu_threads: FieldRef<"products_hardware", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * products_hardware findUnique
   */
  export type products_hardwareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_hardware
     */
    select?: products_hardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_hardware
     */
    omit?: products_hardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_hardwareInclude<ExtArgs> | null
    /**
     * Filter, which products_hardware to fetch.
     */
    where: products_hardwareWhereUniqueInput
  }

  /**
   * products_hardware findUniqueOrThrow
   */
  export type products_hardwareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_hardware
     */
    select?: products_hardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_hardware
     */
    omit?: products_hardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_hardwareInclude<ExtArgs> | null
    /**
     * Filter, which products_hardware to fetch.
     */
    where: products_hardwareWhereUniqueInput
  }

  /**
   * products_hardware findFirst
   */
  export type products_hardwareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_hardware
     */
    select?: products_hardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_hardware
     */
    omit?: products_hardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_hardwareInclude<ExtArgs> | null
    /**
     * Filter, which products_hardware to fetch.
     */
    where?: products_hardwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products_hardwares to fetch.
     */
    orderBy?: products_hardwareOrderByWithRelationInput | products_hardwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products_hardwares.
     */
    cursor?: products_hardwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products_hardwares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products_hardwares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products_hardwares.
     */
    distinct?: Products_hardwareScalarFieldEnum | Products_hardwareScalarFieldEnum[]
  }

  /**
   * products_hardware findFirstOrThrow
   */
  export type products_hardwareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_hardware
     */
    select?: products_hardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_hardware
     */
    omit?: products_hardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_hardwareInclude<ExtArgs> | null
    /**
     * Filter, which products_hardware to fetch.
     */
    where?: products_hardwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products_hardwares to fetch.
     */
    orderBy?: products_hardwareOrderByWithRelationInput | products_hardwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products_hardwares.
     */
    cursor?: products_hardwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products_hardwares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products_hardwares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products_hardwares.
     */
    distinct?: Products_hardwareScalarFieldEnum | Products_hardwareScalarFieldEnum[]
  }

  /**
   * products_hardware findMany
   */
  export type products_hardwareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_hardware
     */
    select?: products_hardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_hardware
     */
    omit?: products_hardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_hardwareInclude<ExtArgs> | null
    /**
     * Filter, which products_hardwares to fetch.
     */
    where?: products_hardwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products_hardwares to fetch.
     */
    orderBy?: products_hardwareOrderByWithRelationInput | products_hardwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products_hardwares.
     */
    cursor?: products_hardwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products_hardwares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products_hardwares.
     */
    skip?: number
    distinct?: Products_hardwareScalarFieldEnum | Products_hardwareScalarFieldEnum[]
  }

  /**
   * products_hardware create
   */
  export type products_hardwareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_hardware
     */
    select?: products_hardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_hardware
     */
    omit?: products_hardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_hardwareInclude<ExtArgs> | null
    /**
     * The data needed to create a products_hardware.
     */
    data: XOR<products_hardwareCreateInput, products_hardwareUncheckedCreateInput>
  }

  /**
   * products_hardware createMany
   */
  export type products_hardwareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products_hardwares.
     */
    data: products_hardwareCreateManyInput | products_hardwareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products_hardware createManyAndReturn
   */
  export type products_hardwareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_hardware
     */
    select?: products_hardwareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products_hardware
     */
    omit?: products_hardwareOmit<ExtArgs> | null
    /**
     * The data used to create many products_hardwares.
     */
    data: products_hardwareCreateManyInput | products_hardwareCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_hardwareIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * products_hardware update
   */
  export type products_hardwareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_hardware
     */
    select?: products_hardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_hardware
     */
    omit?: products_hardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_hardwareInclude<ExtArgs> | null
    /**
     * The data needed to update a products_hardware.
     */
    data: XOR<products_hardwareUpdateInput, products_hardwareUncheckedUpdateInput>
    /**
     * Choose, which products_hardware to update.
     */
    where: products_hardwareWhereUniqueInput
  }

  /**
   * products_hardware updateMany
   */
  export type products_hardwareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products_hardwares.
     */
    data: XOR<products_hardwareUpdateManyMutationInput, products_hardwareUncheckedUpdateManyInput>
    /**
     * Filter which products_hardwares to update
     */
    where?: products_hardwareWhereInput
    /**
     * Limit how many products_hardwares to update.
     */
    limit?: number
  }

  /**
   * products_hardware updateManyAndReturn
   */
  export type products_hardwareUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_hardware
     */
    select?: products_hardwareSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products_hardware
     */
    omit?: products_hardwareOmit<ExtArgs> | null
    /**
     * The data used to update products_hardwares.
     */
    data: XOR<products_hardwareUpdateManyMutationInput, products_hardwareUncheckedUpdateManyInput>
    /**
     * Filter which products_hardwares to update
     */
    where?: products_hardwareWhereInput
    /**
     * Limit how many products_hardwares to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_hardwareIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * products_hardware upsert
   */
  export type products_hardwareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_hardware
     */
    select?: products_hardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_hardware
     */
    omit?: products_hardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_hardwareInclude<ExtArgs> | null
    /**
     * The filter to search for the products_hardware to update in case it exists.
     */
    where: products_hardwareWhereUniqueInput
    /**
     * In case the products_hardware found by the `where` argument doesn't exist, create a new products_hardware with this data.
     */
    create: XOR<products_hardwareCreateInput, products_hardwareUncheckedCreateInput>
    /**
     * In case the products_hardware was found with the provided `where` argument, update it with this data.
     */
    update: XOR<products_hardwareUpdateInput, products_hardwareUncheckedUpdateInput>
  }

  /**
   * products_hardware delete
   */
  export type products_hardwareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_hardware
     */
    select?: products_hardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_hardware
     */
    omit?: products_hardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_hardwareInclude<ExtArgs> | null
    /**
     * Filter which products_hardware to delete.
     */
    where: products_hardwareWhereUniqueInput
  }

  /**
   * products_hardware deleteMany
   */
  export type products_hardwareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products_hardwares to delete
     */
    where?: products_hardwareWhereInput
    /**
     * Limit how many products_hardwares to delete.
     */
    limit?: number
  }

  /**
   * products_hardware without action
   */
  export type products_hardwareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_hardware
     */
    select?: products_hardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_hardware
     */
    omit?: products_hardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_hardwareInclude<ExtArgs> | null
  }


  /**
   * Model tag_categories
   */

  export type AggregateTag_categories = {
    _count: Tag_categoriesCountAggregateOutputType | null
    _avg: Tag_categoriesAvgAggregateOutputType | null
    _sum: Tag_categoriesSumAggregateOutputType | null
    _min: Tag_categoriesMinAggregateOutputType | null
    _max: Tag_categoriesMaxAggregateOutputType | null
  }

  export type Tag_categoriesAvgAggregateOutputType = {
    sort: number | null
  }

  export type Tag_categoriesSumAggregateOutputType = {
    sort: number | null
  }

  export type Tag_categoriesMinAggregateOutputType = {
    id: string | null
    name: string | null
    sort: number | null
    categories_type: string | null
  }

  export type Tag_categoriesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    sort: number | null
    categories_type: string | null
  }

  export type Tag_categoriesCountAggregateOutputType = {
    id: number
    name: number
    sort: number
    categories_type: number
    _all: number
  }


  export type Tag_categoriesAvgAggregateInputType = {
    sort?: true
  }

  export type Tag_categoriesSumAggregateInputType = {
    sort?: true
  }

  export type Tag_categoriesMinAggregateInputType = {
    id?: true
    name?: true
    sort?: true
    categories_type?: true
  }

  export type Tag_categoriesMaxAggregateInputType = {
    id?: true
    name?: true
    sort?: true
    categories_type?: true
  }

  export type Tag_categoriesCountAggregateInputType = {
    id?: true
    name?: true
    sort?: true
    categories_type?: true
    _all?: true
  }

  export type Tag_categoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tag_categories to aggregate.
     */
    where?: tag_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tag_categories to fetch.
     */
    orderBy?: tag_categoriesOrderByWithRelationInput | tag_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tag_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tag_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tag_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tag_categories
    **/
    _count?: true | Tag_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tag_categoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tag_categoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tag_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tag_categoriesMaxAggregateInputType
  }

  export type GetTag_categoriesAggregateType<T extends Tag_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateTag_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag_categories[P]>
      : GetScalarType<T[P], AggregateTag_categories[P]>
  }




  export type tag_categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tag_categoriesWhereInput
    orderBy?: tag_categoriesOrderByWithAggregationInput | tag_categoriesOrderByWithAggregationInput[]
    by: Tag_categoriesScalarFieldEnum[] | Tag_categoriesScalarFieldEnum
    having?: tag_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tag_categoriesCountAggregateInputType | true
    _avg?: Tag_categoriesAvgAggregateInputType
    _sum?: Tag_categoriesSumAggregateInputType
    _min?: Tag_categoriesMinAggregateInputType
    _max?: Tag_categoriesMaxAggregateInputType
  }

  export type Tag_categoriesGroupByOutputType = {
    id: string
    name: string
    sort: number | null
    categories_type: string | null
    _count: Tag_categoriesCountAggregateOutputType | null
    _avg: Tag_categoriesAvgAggregateOutputType | null
    _sum: Tag_categoriesSumAggregateOutputType | null
    _min: Tag_categoriesMinAggregateOutputType | null
    _max: Tag_categoriesMaxAggregateOutputType | null
  }

  type GetTag_categoriesGroupByPayload<T extends tag_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tag_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tag_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tag_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Tag_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type tag_categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sort?: boolean
    categories_type?: boolean
    tags?: boolean | tag_categories$tagsArgs<ExtArgs>
    _count?: boolean | Tag_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag_categories"]>

  export type tag_categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sort?: boolean
    categories_type?: boolean
  }, ExtArgs["result"]["tag_categories"]>

  export type tag_categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sort?: boolean
    categories_type?: boolean
  }, ExtArgs["result"]["tag_categories"]>

  export type tag_categoriesSelectScalar = {
    id?: boolean
    name?: boolean
    sort?: boolean
    categories_type?: boolean
  }

  export type tag_categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sort" | "categories_type", ExtArgs["result"]["tag_categories"]>
  export type tag_categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | tag_categories$tagsArgs<ExtArgs>
    _count?: boolean | Tag_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tag_categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tag_categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tag_categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tag_categories"
    objects: {
      tags: Prisma.$tagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      sort: number | null
      categories_type: string | null
    }, ExtArgs["result"]["tag_categories"]>
    composites: {}
  }

  type tag_categoriesGetPayload<S extends boolean | null | undefined | tag_categoriesDefaultArgs> = $Result.GetResult<Prisma.$tag_categoriesPayload, S>

  type tag_categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tag_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tag_categoriesCountAggregateInputType | true
    }

  export interface tag_categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tag_categories'], meta: { name: 'tag_categories' } }
    /**
     * Find zero or one Tag_categories that matches the filter.
     * @param {tag_categoriesFindUniqueArgs} args - Arguments to find a Tag_categories
     * @example
     * // Get one Tag_categories
     * const tag_categories = await prisma.tag_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tag_categoriesFindUniqueArgs>(args: SelectSubset<T, tag_categoriesFindUniqueArgs<ExtArgs>>): Prisma__tag_categoriesClient<$Result.GetResult<Prisma.$tag_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag_categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tag_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Tag_categories
     * @example
     * // Get one Tag_categories
     * const tag_categories = await prisma.tag_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tag_categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, tag_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tag_categoriesClient<$Result.GetResult<Prisma.$tag_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tag_categoriesFindFirstArgs} args - Arguments to find a Tag_categories
     * @example
     * // Get one Tag_categories
     * const tag_categories = await prisma.tag_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tag_categoriesFindFirstArgs>(args?: SelectSubset<T, tag_categoriesFindFirstArgs<ExtArgs>>): Prisma__tag_categoriesClient<$Result.GetResult<Prisma.$tag_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag_categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tag_categoriesFindFirstOrThrowArgs} args - Arguments to find a Tag_categories
     * @example
     * // Get one Tag_categories
     * const tag_categories = await prisma.tag_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tag_categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, tag_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__tag_categoriesClient<$Result.GetResult<Prisma.$tag_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tag_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tag_categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tag_categories
     * const tag_categories = await prisma.tag_categories.findMany()
     * 
     * // Get first 10 Tag_categories
     * const tag_categories = await prisma.tag_categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tag_categoriesWithIdOnly = await prisma.tag_categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tag_categoriesFindManyArgs>(args?: SelectSubset<T, tag_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tag_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag_categories.
     * @param {tag_categoriesCreateArgs} args - Arguments to create a Tag_categories.
     * @example
     * // Create one Tag_categories
     * const Tag_categories = await prisma.tag_categories.create({
     *   data: {
     *     // ... data to create a Tag_categories
     *   }
     * })
     * 
     */
    create<T extends tag_categoriesCreateArgs>(args: SelectSubset<T, tag_categoriesCreateArgs<ExtArgs>>): Prisma__tag_categoriesClient<$Result.GetResult<Prisma.$tag_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tag_categories.
     * @param {tag_categoriesCreateManyArgs} args - Arguments to create many Tag_categories.
     * @example
     * // Create many Tag_categories
     * const tag_categories = await prisma.tag_categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tag_categoriesCreateManyArgs>(args?: SelectSubset<T, tag_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tag_categories and returns the data saved in the database.
     * @param {tag_categoriesCreateManyAndReturnArgs} args - Arguments to create many Tag_categories.
     * @example
     * // Create many Tag_categories
     * const tag_categories = await prisma.tag_categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tag_categories and only return the `id`
     * const tag_categoriesWithIdOnly = await prisma.tag_categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tag_categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, tag_categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tag_categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag_categories.
     * @param {tag_categoriesDeleteArgs} args - Arguments to delete one Tag_categories.
     * @example
     * // Delete one Tag_categories
     * const Tag_categories = await prisma.tag_categories.delete({
     *   where: {
     *     // ... filter to delete one Tag_categories
     *   }
     * })
     * 
     */
    delete<T extends tag_categoriesDeleteArgs>(args: SelectSubset<T, tag_categoriesDeleteArgs<ExtArgs>>): Prisma__tag_categoriesClient<$Result.GetResult<Prisma.$tag_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag_categories.
     * @param {tag_categoriesUpdateArgs} args - Arguments to update one Tag_categories.
     * @example
     * // Update one Tag_categories
     * const tag_categories = await prisma.tag_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tag_categoriesUpdateArgs>(args: SelectSubset<T, tag_categoriesUpdateArgs<ExtArgs>>): Prisma__tag_categoriesClient<$Result.GetResult<Prisma.$tag_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tag_categories.
     * @param {tag_categoriesDeleteManyArgs} args - Arguments to filter Tag_categories to delete.
     * @example
     * // Delete a few Tag_categories
     * const { count } = await prisma.tag_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tag_categoriesDeleteManyArgs>(args?: SelectSubset<T, tag_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tag_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tag_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tag_categories
     * const tag_categories = await prisma.tag_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tag_categoriesUpdateManyArgs>(args: SelectSubset<T, tag_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tag_categories and returns the data updated in the database.
     * @param {tag_categoriesUpdateManyAndReturnArgs} args - Arguments to update many Tag_categories.
     * @example
     * // Update many Tag_categories
     * const tag_categories = await prisma.tag_categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tag_categories and only return the `id`
     * const tag_categoriesWithIdOnly = await prisma.tag_categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tag_categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, tag_categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tag_categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag_categories.
     * @param {tag_categoriesUpsertArgs} args - Arguments to update or create a Tag_categories.
     * @example
     * // Update or create a Tag_categories
     * const tag_categories = await prisma.tag_categories.upsert({
     *   create: {
     *     // ... data to create a Tag_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag_categories we want to update
     *   }
     * })
     */
    upsert<T extends tag_categoriesUpsertArgs>(args: SelectSubset<T, tag_categoriesUpsertArgs<ExtArgs>>): Prisma__tag_categoriesClient<$Result.GetResult<Prisma.$tag_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tag_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tag_categoriesCountArgs} args - Arguments to filter Tag_categories to count.
     * @example
     * // Count the number of Tag_categories
     * const count = await prisma.tag_categories.count({
     *   where: {
     *     // ... the filter for the Tag_categories we want to count
     *   }
     * })
    **/
    count<T extends tag_categoriesCountArgs>(
      args?: Subset<T, tag_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tag_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tag_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tag_categoriesAggregateArgs>(args: Subset<T, Tag_categoriesAggregateArgs>): Prisma.PrismaPromise<GetTag_categoriesAggregateType<T>>

    /**
     * Group by Tag_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tag_categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tag_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tag_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: tag_categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tag_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTag_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tag_categories model
   */
  readonly fields: tag_categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tag_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tag_categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tags<T extends tag_categories$tagsArgs<ExtArgs> = {}>(args?: Subset<T, tag_categories$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tag_categories model
   */
  interface tag_categoriesFieldRefs {
    readonly id: FieldRef<"tag_categories", 'String'>
    readonly name: FieldRef<"tag_categories", 'String'>
    readonly sort: FieldRef<"tag_categories", 'Int'>
    readonly categories_type: FieldRef<"tag_categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tag_categories findUnique
   */
  export type tag_categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag_categories
     */
    select?: tag_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag_categories
     */
    omit?: tag_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tag_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which tag_categories to fetch.
     */
    where: tag_categoriesWhereUniqueInput
  }

  /**
   * tag_categories findUniqueOrThrow
   */
  export type tag_categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag_categories
     */
    select?: tag_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag_categories
     */
    omit?: tag_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tag_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which tag_categories to fetch.
     */
    where: tag_categoriesWhereUniqueInput
  }

  /**
   * tag_categories findFirst
   */
  export type tag_categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag_categories
     */
    select?: tag_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag_categories
     */
    omit?: tag_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tag_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which tag_categories to fetch.
     */
    where?: tag_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tag_categories to fetch.
     */
    orderBy?: tag_categoriesOrderByWithRelationInput | tag_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tag_categories.
     */
    cursor?: tag_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tag_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tag_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tag_categories.
     */
    distinct?: Tag_categoriesScalarFieldEnum | Tag_categoriesScalarFieldEnum[]
  }

  /**
   * tag_categories findFirstOrThrow
   */
  export type tag_categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag_categories
     */
    select?: tag_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag_categories
     */
    omit?: tag_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tag_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which tag_categories to fetch.
     */
    where?: tag_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tag_categories to fetch.
     */
    orderBy?: tag_categoriesOrderByWithRelationInput | tag_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tag_categories.
     */
    cursor?: tag_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tag_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tag_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tag_categories.
     */
    distinct?: Tag_categoriesScalarFieldEnum | Tag_categoriesScalarFieldEnum[]
  }

  /**
   * tag_categories findMany
   */
  export type tag_categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag_categories
     */
    select?: tag_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag_categories
     */
    omit?: tag_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tag_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which tag_categories to fetch.
     */
    where?: tag_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tag_categories to fetch.
     */
    orderBy?: tag_categoriesOrderByWithRelationInput | tag_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tag_categories.
     */
    cursor?: tag_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tag_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tag_categories.
     */
    skip?: number
    distinct?: Tag_categoriesScalarFieldEnum | Tag_categoriesScalarFieldEnum[]
  }

  /**
   * tag_categories create
   */
  export type tag_categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag_categories
     */
    select?: tag_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag_categories
     */
    omit?: tag_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tag_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a tag_categories.
     */
    data: XOR<tag_categoriesCreateInput, tag_categoriesUncheckedCreateInput>
  }

  /**
   * tag_categories createMany
   */
  export type tag_categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tag_categories.
     */
    data: tag_categoriesCreateManyInput | tag_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tag_categories createManyAndReturn
   */
  export type tag_categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag_categories
     */
    select?: tag_categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tag_categories
     */
    omit?: tag_categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many tag_categories.
     */
    data: tag_categoriesCreateManyInput | tag_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tag_categories update
   */
  export type tag_categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag_categories
     */
    select?: tag_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag_categories
     */
    omit?: tag_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tag_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a tag_categories.
     */
    data: XOR<tag_categoriesUpdateInput, tag_categoriesUncheckedUpdateInput>
    /**
     * Choose, which tag_categories to update.
     */
    where: tag_categoriesWhereUniqueInput
  }

  /**
   * tag_categories updateMany
   */
  export type tag_categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tag_categories.
     */
    data: XOR<tag_categoriesUpdateManyMutationInput, tag_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which tag_categories to update
     */
    where?: tag_categoriesWhereInput
    /**
     * Limit how many tag_categories to update.
     */
    limit?: number
  }

  /**
   * tag_categories updateManyAndReturn
   */
  export type tag_categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag_categories
     */
    select?: tag_categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tag_categories
     */
    omit?: tag_categoriesOmit<ExtArgs> | null
    /**
     * The data used to update tag_categories.
     */
    data: XOR<tag_categoriesUpdateManyMutationInput, tag_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which tag_categories to update
     */
    where?: tag_categoriesWhereInput
    /**
     * Limit how many tag_categories to update.
     */
    limit?: number
  }

  /**
   * tag_categories upsert
   */
  export type tag_categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag_categories
     */
    select?: tag_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag_categories
     */
    omit?: tag_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tag_categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the tag_categories to update in case it exists.
     */
    where: tag_categoriesWhereUniqueInput
    /**
     * In case the tag_categories found by the `where` argument doesn't exist, create a new tag_categories with this data.
     */
    create: XOR<tag_categoriesCreateInput, tag_categoriesUncheckedCreateInput>
    /**
     * In case the tag_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tag_categoriesUpdateInput, tag_categoriesUncheckedUpdateInput>
  }

  /**
   * tag_categories delete
   */
  export type tag_categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag_categories
     */
    select?: tag_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag_categories
     */
    omit?: tag_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tag_categoriesInclude<ExtArgs> | null
    /**
     * Filter which tag_categories to delete.
     */
    where: tag_categoriesWhereUniqueInput
  }

  /**
   * tag_categories deleteMany
   */
  export type tag_categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tag_categories to delete
     */
    where?: tag_categoriesWhereInput
    /**
     * Limit how many tag_categories to delete.
     */
    limit?: number
  }

  /**
   * tag_categories.tags
   */
  export type tag_categories$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    where?: tagsWhereInput
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    cursor?: tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tag_categories without action
   */
  export type tag_categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag_categories
     */
    select?: tag_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag_categories
     */
    omit?: tag_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tag_categoriesInclude<ExtArgs> | null
  }


  /**
   * Model tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsAvgAggregateOutputType = {
    sort_type: number | null
    sort_order: number | null
  }

  export type TagsSumAggregateOutputType = {
    sort_type: number | null
    sort_order: number | null
  }

  export type TagsMinAggregateOutputType = {
    id: string | null
    created_id: string | null
    product_spec: string | null
    product_size: string | null
    sort_type: number | null
    sort_order: number | null
    spec_size: string | null
  }

  export type TagsMaxAggregateOutputType = {
    id: string | null
    created_id: string | null
    product_spec: string | null
    product_size: string | null
    sort_type: number | null
    sort_order: number | null
    spec_size: string | null
  }

  export type TagsCountAggregateOutputType = {
    id: number
    created_id: number
    product_spec: number
    product_size: number
    sort_type: number
    sort_order: number
    spec_size: number
    _all: number
  }


  export type TagsAvgAggregateInputType = {
    sort_type?: true
    sort_order?: true
  }

  export type TagsSumAggregateInputType = {
    sort_type?: true
    sort_order?: true
  }

  export type TagsMinAggregateInputType = {
    id?: true
    created_id?: true
    product_spec?: true
    product_size?: true
    sort_type?: true
    sort_order?: true
    spec_size?: true
  }

  export type TagsMaxAggregateInputType = {
    id?: true
    created_id?: true
    product_spec?: true
    product_size?: true
    sort_type?: true
    sort_order?: true
    spec_size?: true
  }

  export type TagsCountAggregateInputType = {
    id?: true
    created_id?: true
    product_spec?: true
    product_size?: true
    sort_type?: true
    sort_order?: true
    spec_size?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to aggregate.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagsWhereInput
    orderBy?: tagsOrderByWithAggregationInput | tagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _avg?: TagsAvgAggregateInputType
    _sum?: TagsSumAggregateInputType
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    id: string
    created_id: string
    product_spec: string | null
    product_size: string | null
    sort_type: number | null
    sort_order: number | null
    spec_size: string | null
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_id?: boolean
    product_spec?: boolean
    product_size?: boolean
    sort_type?: boolean
    sort_order?: boolean
    spec_size?: boolean
    product_tags?: boolean | tags$product_tagsArgs<ExtArgs>
    tag_categories?: boolean | tag_categoriesDefaultArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_id?: boolean
    product_spec?: boolean
    product_size?: boolean
    sort_type?: boolean
    sort_order?: boolean
    spec_size?: boolean
    tag_categories?: boolean | tag_categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_id?: boolean
    product_spec?: boolean
    product_size?: boolean
    sort_type?: boolean
    sort_order?: boolean
    spec_size?: boolean
    tag_categories?: boolean | tag_categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectScalar = {
    id?: boolean
    created_id?: boolean
    product_spec?: boolean
    product_size?: boolean
    sort_type?: boolean
    sort_order?: boolean
    spec_size?: boolean
  }

  export type tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_id" | "product_spec" | "product_size" | "sort_type" | "sort_order" | "spec_size", ExtArgs["result"]["tags"]>
  export type tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_tags?: boolean | tags$product_tagsArgs<ExtArgs>
    tag_categories?: boolean | tag_categoriesDefaultArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag_categories?: boolean | tag_categoriesDefaultArgs<ExtArgs>
  }
  export type tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag_categories?: boolean | tag_categoriesDefaultArgs<ExtArgs>
  }

  export type $tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tags"
    objects: {
      product_tags: Prisma.$product_tagsPayload<ExtArgs>[]
      tag_categories: Prisma.$tag_categoriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_id: string
      product_spec: string | null
      product_size: string | null
      sort_type: number | null
      sort_order: number | null
      spec_size: string | null
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }

  type tagsGetPayload<S extends boolean | null | undefined | tagsDefaultArgs> = $Result.GetResult<Prisma.$tagsPayload, S>

  type tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagsCountAggregateInputType | true
    }

  export interface tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tags'], meta: { name: 'tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {tagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tagsFindUniqueArgs>(args: SelectSubset<T, tagsFindUniqueArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tagsFindFirstArgs>(args?: SelectSubset<T, tagsFindFirstArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagsWithIdOnly = await prisma.tags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tagsFindManyArgs>(args?: SelectSubset<T, tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tags.
     * @param {tagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
     */
    create<T extends tagsCreateArgs>(args: SelectSubset<T, tagsCreateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {tagsCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tagsCreateManyArgs>(args?: SelectSubset<T, tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {tagsCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tags.
     * @param {tagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
     */
    delete<T extends tagsDeleteArgs>(args: SelectSubset<T, tagsDeleteArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tags.
     * @param {tagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tagsUpdateArgs>(args: SelectSubset<T, tagsUpdateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {tagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tagsDeleteManyArgs>(args?: SelectSubset<T, tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tagsUpdateManyArgs>(args: SelectSubset<T, tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {tagsUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tags.
     * @param {tagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
     */
    upsert<T extends tagsUpsertArgs>(args: SelectSubset<T, tagsUpsertArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagsCountArgs>(
      args?: Subset<T, tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagsGroupByArgs['orderBy'] }
        : { orderBy?: tagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tags model
   */
  readonly fields: tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product_tags<T extends tags$product_tagsArgs<ExtArgs> = {}>(args?: Subset<T, tags$product_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tag_categories<T extends tag_categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tag_categoriesDefaultArgs<ExtArgs>>): Prisma__tag_categoriesClient<$Result.GetResult<Prisma.$tag_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tags model
   */
  interface tagsFieldRefs {
    readonly id: FieldRef<"tags", 'String'>
    readonly created_id: FieldRef<"tags", 'String'>
    readonly product_spec: FieldRef<"tags", 'String'>
    readonly product_size: FieldRef<"tags", 'String'>
    readonly sort_type: FieldRef<"tags", 'Int'>
    readonly sort_order: FieldRef<"tags", 'Int'>
    readonly spec_size: FieldRef<"tags", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tags findUnique
   */
  export type tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findUniqueOrThrow
   */
  export type tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findFirst
   */
  export type tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findFirstOrThrow
   */
  export type tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findMany
   */
  export type tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags create
   */
  export type tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a tags.
     */
    data: XOR<tagsCreateInput, tagsUncheckedCreateInput>
  }

  /**
   * tags createMany
   */
  export type tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tags createManyAndReturn
   */
  export type tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tags update
   */
  export type tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a tags.
     */
    data: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
    /**
     * Choose, which tags to update.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags updateMany
   */
  export type tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tags updateManyAndReturn
   */
  export type tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tags upsert
   */
  export type tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the tags to update in case it exists.
     */
    where: tagsWhereUniqueInput
    /**
     * In case the tags found by the `where` argument doesn't exist, create a new tags with this data.
     */
    create: XOR<tagsCreateInput, tagsUncheckedCreateInput>
    /**
     * In case the tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
  }

  /**
   * tags delete
   */
  export type tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter which tags to delete.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags deleteMany
   */
  export type tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to delete.
     */
    limit?: number
  }

  /**
   * tags.product_tags
   */
  export type tags$product_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_tags
     */
    select?: product_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_tags
     */
    omit?: product_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_tagsInclude<ExtArgs> | null
    where?: product_tagsWhereInput
    orderBy?: product_tagsOrderByWithRelationInput | product_tagsOrderByWithRelationInput[]
    cursor?: product_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_tagsScalarFieldEnum | Product_tagsScalarFieldEnum[]
  }

  /**
   * tags without action
   */
  export type tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Footer
   */

  export type AggregateFooter = {
    _count: FooterCountAggregateOutputType | null
    _min: FooterMinAggregateOutputType | null
    _max: FooterMaxAggregateOutputType | null
  }

  export type FooterMinAggregateOutputType = {
    id: string | null
    icpNumber: string | null
    icpLink: string | null
    copyright: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FooterMaxAggregateOutputType = {
    id: string | null
    icpNumber: string | null
    icpLink: string | null
    copyright: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FooterCountAggregateOutputType = {
    id: number
    icpNumber: number
    icpLink: number
    copyright: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FooterMinAggregateInputType = {
    id?: true
    icpNumber?: true
    icpLink?: true
    copyright?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FooterMaxAggregateInputType = {
    id?: true
    icpNumber?: true
    icpLink?: true
    copyright?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FooterCountAggregateInputType = {
    id?: true
    icpNumber?: true
    icpLink?: true
    copyright?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FooterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Footer to aggregate.
     */
    where?: FooterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Footers to fetch.
     */
    orderBy?: FooterOrderByWithRelationInput | FooterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FooterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Footers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Footers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Footers
    **/
    _count?: true | FooterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FooterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FooterMaxAggregateInputType
  }

  export type GetFooterAggregateType<T extends FooterAggregateArgs> = {
        [P in keyof T & keyof AggregateFooter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFooter[P]>
      : GetScalarType<T[P], AggregateFooter[P]>
  }




  export type FooterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FooterWhereInput
    orderBy?: FooterOrderByWithAggregationInput | FooterOrderByWithAggregationInput[]
    by: FooterScalarFieldEnum[] | FooterScalarFieldEnum
    having?: FooterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FooterCountAggregateInputType | true
    _min?: FooterMinAggregateInputType
    _max?: FooterMaxAggregateInputType
  }

  export type FooterGroupByOutputType = {
    id: string
    icpNumber: string | null
    icpLink: string | null
    copyright: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: FooterCountAggregateOutputType | null
    _min: FooterMinAggregateOutputType | null
    _max: FooterMaxAggregateOutputType | null
  }

  type GetFooterGroupByPayload<T extends FooterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FooterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FooterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FooterGroupByOutputType[P]>
            : GetScalarType<T[P], FooterGroupByOutputType[P]>
        }
      >
    >


  export type FooterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    icpNumber?: boolean
    icpLink?: boolean
    copyright?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    links?: boolean | Footer$linksArgs<ExtArgs>
    _count?: boolean | FooterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["footer"]>

  export type FooterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    icpNumber?: boolean
    icpLink?: boolean
    copyright?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["footer"]>

  export type FooterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    icpNumber?: boolean
    icpLink?: boolean
    copyright?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["footer"]>

  export type FooterSelectScalar = {
    id?: boolean
    icpNumber?: boolean
    icpLink?: boolean
    copyright?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FooterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "icpNumber" | "icpLink" | "copyright" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["footer"]>
  export type FooterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    links?: boolean | Footer$linksArgs<ExtArgs>
    _count?: boolean | FooterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FooterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FooterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FooterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Footer"
    objects: {
      links: Prisma.$FooterLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      icpNumber: string | null
      icpLink: string | null
      copyright: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["footer"]>
    composites: {}
  }

  type FooterGetPayload<S extends boolean | null | undefined | FooterDefaultArgs> = $Result.GetResult<Prisma.$FooterPayload, S>

  type FooterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FooterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FooterCountAggregateInputType | true
    }

  export interface FooterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Footer'], meta: { name: 'Footer' } }
    /**
     * Find zero or one Footer that matches the filter.
     * @param {FooterFindUniqueArgs} args - Arguments to find a Footer
     * @example
     * // Get one Footer
     * const footer = await prisma.footer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FooterFindUniqueArgs>(args: SelectSubset<T, FooterFindUniqueArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Footer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FooterFindUniqueOrThrowArgs} args - Arguments to find a Footer
     * @example
     * // Get one Footer
     * const footer = await prisma.footer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FooterFindUniqueOrThrowArgs>(args: SelectSubset<T, FooterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Footer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterFindFirstArgs} args - Arguments to find a Footer
     * @example
     * // Get one Footer
     * const footer = await prisma.footer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FooterFindFirstArgs>(args?: SelectSubset<T, FooterFindFirstArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Footer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterFindFirstOrThrowArgs} args - Arguments to find a Footer
     * @example
     * // Get one Footer
     * const footer = await prisma.footer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FooterFindFirstOrThrowArgs>(args?: SelectSubset<T, FooterFindFirstOrThrowArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Footers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Footers
     * const footers = await prisma.footer.findMany()
     * 
     * // Get first 10 Footers
     * const footers = await prisma.footer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const footerWithIdOnly = await prisma.footer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FooterFindManyArgs>(args?: SelectSubset<T, FooterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Footer.
     * @param {FooterCreateArgs} args - Arguments to create a Footer.
     * @example
     * // Create one Footer
     * const Footer = await prisma.footer.create({
     *   data: {
     *     // ... data to create a Footer
     *   }
     * })
     * 
     */
    create<T extends FooterCreateArgs>(args: SelectSubset<T, FooterCreateArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Footers.
     * @param {FooterCreateManyArgs} args - Arguments to create many Footers.
     * @example
     * // Create many Footers
     * const footer = await prisma.footer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FooterCreateManyArgs>(args?: SelectSubset<T, FooterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Footers and returns the data saved in the database.
     * @param {FooterCreateManyAndReturnArgs} args - Arguments to create many Footers.
     * @example
     * // Create many Footers
     * const footer = await prisma.footer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Footers and only return the `id`
     * const footerWithIdOnly = await prisma.footer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FooterCreateManyAndReturnArgs>(args?: SelectSubset<T, FooterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Footer.
     * @param {FooterDeleteArgs} args - Arguments to delete one Footer.
     * @example
     * // Delete one Footer
     * const Footer = await prisma.footer.delete({
     *   where: {
     *     // ... filter to delete one Footer
     *   }
     * })
     * 
     */
    delete<T extends FooterDeleteArgs>(args: SelectSubset<T, FooterDeleteArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Footer.
     * @param {FooterUpdateArgs} args - Arguments to update one Footer.
     * @example
     * // Update one Footer
     * const footer = await prisma.footer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FooterUpdateArgs>(args: SelectSubset<T, FooterUpdateArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Footers.
     * @param {FooterDeleteManyArgs} args - Arguments to filter Footers to delete.
     * @example
     * // Delete a few Footers
     * const { count } = await prisma.footer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FooterDeleteManyArgs>(args?: SelectSubset<T, FooterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Footers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Footers
     * const footer = await prisma.footer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FooterUpdateManyArgs>(args: SelectSubset<T, FooterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Footers and returns the data updated in the database.
     * @param {FooterUpdateManyAndReturnArgs} args - Arguments to update many Footers.
     * @example
     * // Update many Footers
     * const footer = await prisma.footer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Footers and only return the `id`
     * const footerWithIdOnly = await prisma.footer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FooterUpdateManyAndReturnArgs>(args: SelectSubset<T, FooterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Footer.
     * @param {FooterUpsertArgs} args - Arguments to update or create a Footer.
     * @example
     * // Update or create a Footer
     * const footer = await prisma.footer.upsert({
     *   create: {
     *     // ... data to create a Footer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Footer we want to update
     *   }
     * })
     */
    upsert<T extends FooterUpsertArgs>(args: SelectSubset<T, FooterUpsertArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Footers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterCountArgs} args - Arguments to filter Footers to count.
     * @example
     * // Count the number of Footers
     * const count = await prisma.footer.count({
     *   where: {
     *     // ... the filter for the Footers we want to count
     *   }
     * })
    **/
    count<T extends FooterCountArgs>(
      args?: Subset<T, FooterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FooterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Footer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FooterAggregateArgs>(args: Subset<T, FooterAggregateArgs>): Prisma.PrismaPromise<GetFooterAggregateType<T>>

    /**
     * Group by Footer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FooterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FooterGroupByArgs['orderBy'] }
        : { orderBy?: FooterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FooterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFooterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Footer model
   */
  readonly fields: FooterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Footer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FooterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    links<T extends Footer$linksArgs<ExtArgs> = {}>(args?: Subset<T, Footer$linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FooterLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Footer model
   */
  interface FooterFieldRefs {
    readonly id: FieldRef<"Footer", 'String'>
    readonly icpNumber: FieldRef<"Footer", 'String'>
    readonly icpLink: FieldRef<"Footer", 'String'>
    readonly copyright: FieldRef<"Footer", 'String'>
    readonly isActive: FieldRef<"Footer", 'Boolean'>
    readonly createdAt: FieldRef<"Footer", 'DateTime'>
    readonly updatedAt: FieldRef<"Footer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Footer findUnique
   */
  export type FooterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterInclude<ExtArgs> | null
    /**
     * Filter, which Footer to fetch.
     */
    where: FooterWhereUniqueInput
  }

  /**
   * Footer findUniqueOrThrow
   */
  export type FooterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterInclude<ExtArgs> | null
    /**
     * Filter, which Footer to fetch.
     */
    where: FooterWhereUniqueInput
  }

  /**
   * Footer findFirst
   */
  export type FooterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterInclude<ExtArgs> | null
    /**
     * Filter, which Footer to fetch.
     */
    where?: FooterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Footers to fetch.
     */
    orderBy?: FooterOrderByWithRelationInput | FooterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Footers.
     */
    cursor?: FooterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Footers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Footers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Footers.
     */
    distinct?: FooterScalarFieldEnum | FooterScalarFieldEnum[]
  }

  /**
   * Footer findFirstOrThrow
   */
  export type FooterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterInclude<ExtArgs> | null
    /**
     * Filter, which Footer to fetch.
     */
    where?: FooterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Footers to fetch.
     */
    orderBy?: FooterOrderByWithRelationInput | FooterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Footers.
     */
    cursor?: FooterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Footers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Footers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Footers.
     */
    distinct?: FooterScalarFieldEnum | FooterScalarFieldEnum[]
  }

  /**
   * Footer findMany
   */
  export type FooterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterInclude<ExtArgs> | null
    /**
     * Filter, which Footers to fetch.
     */
    where?: FooterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Footers to fetch.
     */
    orderBy?: FooterOrderByWithRelationInput | FooterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Footers.
     */
    cursor?: FooterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Footers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Footers.
     */
    skip?: number
    distinct?: FooterScalarFieldEnum | FooterScalarFieldEnum[]
  }

  /**
   * Footer create
   */
  export type FooterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterInclude<ExtArgs> | null
    /**
     * The data needed to create a Footer.
     */
    data?: XOR<FooterCreateInput, FooterUncheckedCreateInput>
  }

  /**
   * Footer createMany
   */
  export type FooterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Footers.
     */
    data: FooterCreateManyInput | FooterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Footer createManyAndReturn
   */
  export type FooterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * The data used to create many Footers.
     */
    data: FooterCreateManyInput | FooterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Footer update
   */
  export type FooterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterInclude<ExtArgs> | null
    /**
     * The data needed to update a Footer.
     */
    data: XOR<FooterUpdateInput, FooterUncheckedUpdateInput>
    /**
     * Choose, which Footer to update.
     */
    where: FooterWhereUniqueInput
  }

  /**
   * Footer updateMany
   */
  export type FooterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Footers.
     */
    data: XOR<FooterUpdateManyMutationInput, FooterUncheckedUpdateManyInput>
    /**
     * Filter which Footers to update
     */
    where?: FooterWhereInput
    /**
     * Limit how many Footers to update.
     */
    limit?: number
  }

  /**
   * Footer updateManyAndReturn
   */
  export type FooterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * The data used to update Footers.
     */
    data: XOR<FooterUpdateManyMutationInput, FooterUncheckedUpdateManyInput>
    /**
     * Filter which Footers to update
     */
    where?: FooterWhereInput
    /**
     * Limit how many Footers to update.
     */
    limit?: number
  }

  /**
   * Footer upsert
   */
  export type FooterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterInclude<ExtArgs> | null
    /**
     * The filter to search for the Footer to update in case it exists.
     */
    where: FooterWhereUniqueInput
    /**
     * In case the Footer found by the `where` argument doesn't exist, create a new Footer with this data.
     */
    create: XOR<FooterCreateInput, FooterUncheckedCreateInput>
    /**
     * In case the Footer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FooterUpdateInput, FooterUncheckedUpdateInput>
  }

  /**
   * Footer delete
   */
  export type FooterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterInclude<ExtArgs> | null
    /**
     * Filter which Footer to delete.
     */
    where: FooterWhereUniqueInput
  }

  /**
   * Footer deleteMany
   */
  export type FooterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Footers to delete
     */
    where?: FooterWhereInput
    /**
     * Limit how many Footers to delete.
     */
    limit?: number
  }

  /**
   * Footer.links
   */
  export type Footer$linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLink
     */
    select?: FooterLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLink
     */
    omit?: FooterLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterLinkInclude<ExtArgs> | null
    where?: FooterLinkWhereInput
    orderBy?: FooterLinkOrderByWithRelationInput | FooterLinkOrderByWithRelationInput[]
    cursor?: FooterLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FooterLinkScalarFieldEnum | FooterLinkScalarFieldEnum[]
  }

  /**
   * Footer without action
   */
  export type FooterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterInclude<ExtArgs> | null
  }


  /**
   * Model FooterLink
   */

  export type AggregateFooterLink = {
    _count: FooterLinkCountAggregateOutputType | null
    _avg: FooterLinkAvgAggregateOutputType | null
    _sum: FooterLinkSumAggregateOutputType | null
    _min: FooterLinkMinAggregateOutputType | null
    _max: FooterLinkMaxAggregateOutputType | null
  }

  export type FooterLinkAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type FooterLinkSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type FooterLinkMinAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    category: string | null
    icon: string | null
    sortOrder: number | null
    isActive: boolean | null
    footerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FooterLinkMaxAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    category: string | null
    icon: string | null
    sortOrder: number | null
    isActive: boolean | null
    footerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FooterLinkCountAggregateOutputType = {
    id: number
    title: number
    url: number
    category: number
    icon: number
    sortOrder: number
    isActive: number
    footerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FooterLinkAvgAggregateInputType = {
    sortOrder?: true
  }

  export type FooterLinkSumAggregateInputType = {
    sortOrder?: true
  }

  export type FooterLinkMinAggregateInputType = {
    id?: true
    title?: true
    url?: true
    category?: true
    icon?: true
    sortOrder?: true
    isActive?: true
    footerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FooterLinkMaxAggregateInputType = {
    id?: true
    title?: true
    url?: true
    category?: true
    icon?: true
    sortOrder?: true
    isActive?: true
    footerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FooterLinkCountAggregateInputType = {
    id?: true
    title?: true
    url?: true
    category?: true
    icon?: true
    sortOrder?: true
    isActive?: true
    footerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FooterLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FooterLink to aggregate.
     */
    where?: FooterLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FooterLinks to fetch.
     */
    orderBy?: FooterLinkOrderByWithRelationInput | FooterLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FooterLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FooterLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FooterLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FooterLinks
    **/
    _count?: true | FooterLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FooterLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FooterLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FooterLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FooterLinkMaxAggregateInputType
  }

  export type GetFooterLinkAggregateType<T extends FooterLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateFooterLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFooterLink[P]>
      : GetScalarType<T[P], AggregateFooterLink[P]>
  }




  export type FooterLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FooterLinkWhereInput
    orderBy?: FooterLinkOrderByWithAggregationInput | FooterLinkOrderByWithAggregationInput[]
    by: FooterLinkScalarFieldEnum[] | FooterLinkScalarFieldEnum
    having?: FooterLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FooterLinkCountAggregateInputType | true
    _avg?: FooterLinkAvgAggregateInputType
    _sum?: FooterLinkSumAggregateInputType
    _min?: FooterLinkMinAggregateInputType
    _max?: FooterLinkMaxAggregateInputType
  }

  export type FooterLinkGroupByOutputType = {
    id: string
    title: string
    url: string
    category: string
    icon: string | null
    sortOrder: number
    isActive: boolean
    footerId: string
    createdAt: Date
    updatedAt: Date
    _count: FooterLinkCountAggregateOutputType | null
    _avg: FooterLinkAvgAggregateOutputType | null
    _sum: FooterLinkSumAggregateOutputType | null
    _min: FooterLinkMinAggregateOutputType | null
    _max: FooterLinkMaxAggregateOutputType | null
  }

  type GetFooterLinkGroupByPayload<T extends FooterLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FooterLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FooterLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FooterLinkGroupByOutputType[P]>
            : GetScalarType<T[P], FooterLinkGroupByOutputType[P]>
        }
      >
    >


  export type FooterLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    category?: boolean
    icon?: boolean
    sortOrder?: boolean
    isActive?: boolean
    footerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    footer?: boolean | FooterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["footerLink"]>

  export type FooterLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    category?: boolean
    icon?: boolean
    sortOrder?: boolean
    isActive?: boolean
    footerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    footer?: boolean | FooterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["footerLink"]>

  export type FooterLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    category?: boolean
    icon?: boolean
    sortOrder?: boolean
    isActive?: boolean
    footerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    footer?: boolean | FooterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["footerLink"]>

  export type FooterLinkSelectScalar = {
    id?: boolean
    title?: boolean
    url?: boolean
    category?: boolean
    icon?: boolean
    sortOrder?: boolean
    isActive?: boolean
    footerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FooterLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "url" | "category" | "icon" | "sortOrder" | "isActive" | "footerId" | "createdAt" | "updatedAt", ExtArgs["result"]["footerLink"]>
  export type FooterLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    footer?: boolean | FooterDefaultArgs<ExtArgs>
  }
  export type FooterLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    footer?: boolean | FooterDefaultArgs<ExtArgs>
  }
  export type FooterLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    footer?: boolean | FooterDefaultArgs<ExtArgs>
  }

  export type $FooterLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FooterLink"
    objects: {
      footer: Prisma.$FooterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      url: string
      category: string
      icon: string | null
      sortOrder: number
      isActive: boolean
      footerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["footerLink"]>
    composites: {}
  }

  type FooterLinkGetPayload<S extends boolean | null | undefined | FooterLinkDefaultArgs> = $Result.GetResult<Prisma.$FooterLinkPayload, S>

  type FooterLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FooterLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FooterLinkCountAggregateInputType | true
    }

  export interface FooterLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FooterLink'], meta: { name: 'FooterLink' } }
    /**
     * Find zero or one FooterLink that matches the filter.
     * @param {FooterLinkFindUniqueArgs} args - Arguments to find a FooterLink
     * @example
     * // Get one FooterLink
     * const footerLink = await prisma.footerLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FooterLinkFindUniqueArgs>(args: SelectSubset<T, FooterLinkFindUniqueArgs<ExtArgs>>): Prisma__FooterLinkClient<$Result.GetResult<Prisma.$FooterLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FooterLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FooterLinkFindUniqueOrThrowArgs} args - Arguments to find a FooterLink
     * @example
     * // Get one FooterLink
     * const footerLink = await prisma.footerLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FooterLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, FooterLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FooterLinkClient<$Result.GetResult<Prisma.$FooterLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FooterLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterLinkFindFirstArgs} args - Arguments to find a FooterLink
     * @example
     * // Get one FooterLink
     * const footerLink = await prisma.footerLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FooterLinkFindFirstArgs>(args?: SelectSubset<T, FooterLinkFindFirstArgs<ExtArgs>>): Prisma__FooterLinkClient<$Result.GetResult<Prisma.$FooterLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FooterLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterLinkFindFirstOrThrowArgs} args - Arguments to find a FooterLink
     * @example
     * // Get one FooterLink
     * const footerLink = await prisma.footerLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FooterLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, FooterLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__FooterLinkClient<$Result.GetResult<Prisma.$FooterLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FooterLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FooterLinks
     * const footerLinks = await prisma.footerLink.findMany()
     * 
     * // Get first 10 FooterLinks
     * const footerLinks = await prisma.footerLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const footerLinkWithIdOnly = await prisma.footerLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FooterLinkFindManyArgs>(args?: SelectSubset<T, FooterLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FooterLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FooterLink.
     * @param {FooterLinkCreateArgs} args - Arguments to create a FooterLink.
     * @example
     * // Create one FooterLink
     * const FooterLink = await prisma.footerLink.create({
     *   data: {
     *     // ... data to create a FooterLink
     *   }
     * })
     * 
     */
    create<T extends FooterLinkCreateArgs>(args: SelectSubset<T, FooterLinkCreateArgs<ExtArgs>>): Prisma__FooterLinkClient<$Result.GetResult<Prisma.$FooterLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FooterLinks.
     * @param {FooterLinkCreateManyArgs} args - Arguments to create many FooterLinks.
     * @example
     * // Create many FooterLinks
     * const footerLink = await prisma.footerLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FooterLinkCreateManyArgs>(args?: SelectSubset<T, FooterLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FooterLinks and returns the data saved in the database.
     * @param {FooterLinkCreateManyAndReturnArgs} args - Arguments to create many FooterLinks.
     * @example
     * // Create many FooterLinks
     * const footerLink = await prisma.footerLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FooterLinks and only return the `id`
     * const footerLinkWithIdOnly = await prisma.footerLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FooterLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, FooterLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FooterLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FooterLink.
     * @param {FooterLinkDeleteArgs} args - Arguments to delete one FooterLink.
     * @example
     * // Delete one FooterLink
     * const FooterLink = await prisma.footerLink.delete({
     *   where: {
     *     // ... filter to delete one FooterLink
     *   }
     * })
     * 
     */
    delete<T extends FooterLinkDeleteArgs>(args: SelectSubset<T, FooterLinkDeleteArgs<ExtArgs>>): Prisma__FooterLinkClient<$Result.GetResult<Prisma.$FooterLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FooterLink.
     * @param {FooterLinkUpdateArgs} args - Arguments to update one FooterLink.
     * @example
     * // Update one FooterLink
     * const footerLink = await prisma.footerLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FooterLinkUpdateArgs>(args: SelectSubset<T, FooterLinkUpdateArgs<ExtArgs>>): Prisma__FooterLinkClient<$Result.GetResult<Prisma.$FooterLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FooterLinks.
     * @param {FooterLinkDeleteManyArgs} args - Arguments to filter FooterLinks to delete.
     * @example
     * // Delete a few FooterLinks
     * const { count } = await prisma.footerLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FooterLinkDeleteManyArgs>(args?: SelectSubset<T, FooterLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FooterLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FooterLinks
     * const footerLink = await prisma.footerLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FooterLinkUpdateManyArgs>(args: SelectSubset<T, FooterLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FooterLinks and returns the data updated in the database.
     * @param {FooterLinkUpdateManyAndReturnArgs} args - Arguments to update many FooterLinks.
     * @example
     * // Update many FooterLinks
     * const footerLink = await prisma.footerLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FooterLinks and only return the `id`
     * const footerLinkWithIdOnly = await prisma.footerLink.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FooterLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, FooterLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FooterLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FooterLink.
     * @param {FooterLinkUpsertArgs} args - Arguments to update or create a FooterLink.
     * @example
     * // Update or create a FooterLink
     * const footerLink = await prisma.footerLink.upsert({
     *   create: {
     *     // ... data to create a FooterLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FooterLink we want to update
     *   }
     * })
     */
    upsert<T extends FooterLinkUpsertArgs>(args: SelectSubset<T, FooterLinkUpsertArgs<ExtArgs>>): Prisma__FooterLinkClient<$Result.GetResult<Prisma.$FooterLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FooterLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterLinkCountArgs} args - Arguments to filter FooterLinks to count.
     * @example
     * // Count the number of FooterLinks
     * const count = await prisma.footerLink.count({
     *   where: {
     *     // ... the filter for the FooterLinks we want to count
     *   }
     * })
    **/
    count<T extends FooterLinkCountArgs>(
      args?: Subset<T, FooterLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FooterLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FooterLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FooterLinkAggregateArgs>(args: Subset<T, FooterLinkAggregateArgs>): Prisma.PrismaPromise<GetFooterLinkAggregateType<T>>

    /**
     * Group by FooterLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FooterLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FooterLinkGroupByArgs['orderBy'] }
        : { orderBy?: FooterLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FooterLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFooterLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FooterLink model
   */
  readonly fields: FooterLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FooterLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FooterLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    footer<T extends FooterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FooterDefaultArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FooterLink model
   */
  interface FooterLinkFieldRefs {
    readonly id: FieldRef<"FooterLink", 'String'>
    readonly title: FieldRef<"FooterLink", 'String'>
    readonly url: FieldRef<"FooterLink", 'String'>
    readonly category: FieldRef<"FooterLink", 'String'>
    readonly icon: FieldRef<"FooterLink", 'String'>
    readonly sortOrder: FieldRef<"FooterLink", 'Int'>
    readonly isActive: FieldRef<"FooterLink", 'Boolean'>
    readonly footerId: FieldRef<"FooterLink", 'String'>
    readonly createdAt: FieldRef<"FooterLink", 'DateTime'>
    readonly updatedAt: FieldRef<"FooterLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FooterLink findUnique
   */
  export type FooterLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLink
     */
    select?: FooterLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLink
     */
    omit?: FooterLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterLinkInclude<ExtArgs> | null
    /**
     * Filter, which FooterLink to fetch.
     */
    where: FooterLinkWhereUniqueInput
  }

  /**
   * FooterLink findUniqueOrThrow
   */
  export type FooterLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLink
     */
    select?: FooterLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLink
     */
    omit?: FooterLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterLinkInclude<ExtArgs> | null
    /**
     * Filter, which FooterLink to fetch.
     */
    where: FooterLinkWhereUniqueInput
  }

  /**
   * FooterLink findFirst
   */
  export type FooterLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLink
     */
    select?: FooterLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLink
     */
    omit?: FooterLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterLinkInclude<ExtArgs> | null
    /**
     * Filter, which FooterLink to fetch.
     */
    where?: FooterLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FooterLinks to fetch.
     */
    orderBy?: FooterLinkOrderByWithRelationInput | FooterLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FooterLinks.
     */
    cursor?: FooterLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FooterLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FooterLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FooterLinks.
     */
    distinct?: FooterLinkScalarFieldEnum | FooterLinkScalarFieldEnum[]
  }

  /**
   * FooterLink findFirstOrThrow
   */
  export type FooterLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLink
     */
    select?: FooterLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLink
     */
    omit?: FooterLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterLinkInclude<ExtArgs> | null
    /**
     * Filter, which FooterLink to fetch.
     */
    where?: FooterLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FooterLinks to fetch.
     */
    orderBy?: FooterLinkOrderByWithRelationInput | FooterLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FooterLinks.
     */
    cursor?: FooterLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FooterLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FooterLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FooterLinks.
     */
    distinct?: FooterLinkScalarFieldEnum | FooterLinkScalarFieldEnum[]
  }

  /**
   * FooterLink findMany
   */
  export type FooterLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLink
     */
    select?: FooterLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLink
     */
    omit?: FooterLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterLinkInclude<ExtArgs> | null
    /**
     * Filter, which FooterLinks to fetch.
     */
    where?: FooterLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FooterLinks to fetch.
     */
    orderBy?: FooterLinkOrderByWithRelationInput | FooterLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FooterLinks.
     */
    cursor?: FooterLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FooterLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FooterLinks.
     */
    skip?: number
    distinct?: FooterLinkScalarFieldEnum | FooterLinkScalarFieldEnum[]
  }

  /**
   * FooterLink create
   */
  export type FooterLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLink
     */
    select?: FooterLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLink
     */
    omit?: FooterLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a FooterLink.
     */
    data: XOR<FooterLinkCreateInput, FooterLinkUncheckedCreateInput>
  }

  /**
   * FooterLink createMany
   */
  export type FooterLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FooterLinks.
     */
    data: FooterLinkCreateManyInput | FooterLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FooterLink createManyAndReturn
   */
  export type FooterLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLink
     */
    select?: FooterLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLink
     */
    omit?: FooterLinkOmit<ExtArgs> | null
    /**
     * The data used to create many FooterLinks.
     */
    data: FooterLinkCreateManyInput | FooterLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FooterLink update
   */
  export type FooterLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLink
     */
    select?: FooterLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLink
     */
    omit?: FooterLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a FooterLink.
     */
    data: XOR<FooterLinkUpdateInput, FooterLinkUncheckedUpdateInput>
    /**
     * Choose, which FooterLink to update.
     */
    where: FooterLinkWhereUniqueInput
  }

  /**
   * FooterLink updateMany
   */
  export type FooterLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FooterLinks.
     */
    data: XOR<FooterLinkUpdateManyMutationInput, FooterLinkUncheckedUpdateManyInput>
    /**
     * Filter which FooterLinks to update
     */
    where?: FooterLinkWhereInput
    /**
     * Limit how many FooterLinks to update.
     */
    limit?: number
  }

  /**
   * FooterLink updateManyAndReturn
   */
  export type FooterLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLink
     */
    select?: FooterLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLink
     */
    omit?: FooterLinkOmit<ExtArgs> | null
    /**
     * The data used to update FooterLinks.
     */
    data: XOR<FooterLinkUpdateManyMutationInput, FooterLinkUncheckedUpdateManyInput>
    /**
     * Filter which FooterLinks to update
     */
    where?: FooterLinkWhereInput
    /**
     * Limit how many FooterLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FooterLink upsert
   */
  export type FooterLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLink
     */
    select?: FooterLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLink
     */
    omit?: FooterLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the FooterLink to update in case it exists.
     */
    where: FooterLinkWhereUniqueInput
    /**
     * In case the FooterLink found by the `where` argument doesn't exist, create a new FooterLink with this data.
     */
    create: XOR<FooterLinkCreateInput, FooterLinkUncheckedCreateInput>
    /**
     * In case the FooterLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FooterLinkUpdateInput, FooterLinkUncheckedUpdateInput>
  }

  /**
   * FooterLink delete
   */
  export type FooterLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLink
     */
    select?: FooterLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLink
     */
    omit?: FooterLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterLinkInclude<ExtArgs> | null
    /**
     * Filter which FooterLink to delete.
     */
    where: FooterLinkWhereUniqueInput
  }

  /**
   * FooterLink deleteMany
   */
  export type FooterLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FooterLinks to delete
     */
    where?: FooterLinkWhereInput
    /**
     * Limit how many FooterLinks to delete.
     */
    limit?: number
  }

  /**
   * FooterLink without action
   */
  export type FooterLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLink
     */
    select?: FooterLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLink
     */
    omit?: FooterLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterLinkInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    cover_image: 'cover_image',
    spec_pdf_url: 'spec_pdf_url',
    is_active: 'is_active',
    description_i18n: 'description_i18n',
    software_space: 'software_space',
    hardware_space: 'hardware_space',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const Product_tagsScalarFieldEnum: {
    product_id: 'product_id',
    tag_id: 'tag_id',
    product_name: 'product_name',
    tag_spec: 'tag_spec',
    tag_size: 'tag_size'
  };

  export type Product_tagsScalarFieldEnum = (typeof Product_tagsScalarFieldEnum)[keyof typeof Product_tagsScalarFieldEnum]


  export const Products_hardwareScalarFieldEnum: {
    id: 'id',
    products_id: 'products_id',
    controller_count: 'controller_count',
    cpu_model: 'cpu_model',
    cpu_count: 'cpu_count',
    cpu_cores: 'cpu_cores',
    cpu_architecture: 'cpu_architecture',
    cpu_base_clock: 'cpu_base_clock',
    cpu_turbo_clock: 'cpu_turbo_clock',
    hardware_encryption: 'hardware_encryption',
    memory_total: 'memory_total',
    memory_installed: 'memory_installed',
    memory_slots: 'memory_slots',
    memory_max: 'memory_max',
    disk_bays: 'disk_bays',
    disk_bays_max: 'disk_bays_max',
    disk_types_supported: 'disk_types_supported',
    m2_slot: 'm2_slot',
    disk_host_swappable: 'disk_host_swappable',
    lan_rj45_1G: 'lan_rj45_1G',
    lan_rj45_2_5G: 'lan_rj45_2_5G',
    lan_rj45_10G: 'lan_rj45_10G',
    management_prot: 'management_prot',
    max_lax_ports: 'max_lax_ports',
    usb_3_2_prots: 'usb_3_2_prots',
    expansion_ports: 'expansion_ports',
    expansion_port_types: 'expansion_port_types',
    pcie_expansion: 'pcie_expansion',
    chassis_type: 'chassis_type',
    dimensions: 'dimensions',
    rack_mount_kit: 'rack_mount_kit',
    fan_size: 'fan_size',
    fan_replaceable: 'fan_replaceable',
    led_brightness_adj: 'led_brightness_adj',
    auto_power_recovery: 'auto_power_recovery',
    noise_lenel: 'noise_lenel',
    scheduled_power: 'scheduled_power',
    wake_on_lan: 'wake_on_lan',
    dual_power_supply: 'dual_power_supply',
    ac_input_voltage: 'ac_input_voltage',
    frequency: 'frequency',
    power_consumption: 'power_consumption',
    working_temperature: 'working_temperature',
    storage_temperature: 'storage_temperature',
    relative_humidity: 'relative_humidity',
    certifications: 'certifications',
    warranty: 'warranty',
    environmental_compliance: 'environmental_compliance',
    package_contents: 'package_contents',
    optional_accessories: 'optional_accessories',
    cpu_threads: 'cpu_threads'
  };

  export type Products_hardwareScalarFieldEnum = (typeof Products_hardwareScalarFieldEnum)[keyof typeof Products_hardwareScalarFieldEnum]


  export const Tag_categoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sort: 'sort',
    categories_type: 'categories_type'
  };

  export type Tag_categoriesScalarFieldEnum = (typeof Tag_categoriesScalarFieldEnum)[keyof typeof Tag_categoriesScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    id: 'id',
    created_id: 'created_id',
    product_spec: 'product_spec',
    product_size: 'product_size',
    sort_type: 'sort_type',
    sort_order: 'sort_order',
    spec_size: 'spec_size'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FooterScalarFieldEnum: {
    id: 'id',
    icpNumber: 'icpNumber',
    icpLink: 'icpLink',
    copyright: 'copyright',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FooterScalarFieldEnum = (typeof FooterScalarFieldEnum)[keyof typeof FooterScalarFieldEnum]


  export const FooterLinkScalarFieldEnum: {
    id: 'id',
    title: 'title',
    url: 'url',
    category: 'category',
    icon: 'icon',
    sortOrder: 'sortOrder',
    isActive: 'isActive',
    footerId: 'footerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FooterLinkScalarFieldEnum = (typeof FooterLinkScalarFieldEnum)[keyof typeof FooterLinkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: UuidFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    cover_image?: StringNullableFilter<"Product"> | string | null
    spec_pdf_url?: StringNullableFilter<"Product"> | string | null
    is_active?: BoolFilter<"Product"> | boolean
    description_i18n?: JsonNullableFilter<"Product">
    software_space?: JsonNullableFilter<"Product">
    hardware_space?: JsonNullableFilter<"Product">
    createdAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    product_tags?: Product_tagsListRelationFilter
    products_hardware?: Products_hardwareListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    cover_image?: SortOrderInput | SortOrder
    spec_pdf_url?: SortOrderInput | SortOrder
    is_active?: SortOrder
    description_i18n?: SortOrderInput | SortOrder
    software_space?: SortOrderInput | SortOrder
    hardware_space?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    product_tags?: product_tagsOrderByRelationAggregateInput
    products_hardware?: products_hardwareOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    cover_image?: StringNullableFilter<"Product"> | string | null
    spec_pdf_url?: StringNullableFilter<"Product"> | string | null
    is_active?: BoolFilter<"Product"> | boolean
    description_i18n?: JsonNullableFilter<"Product">
    software_space?: JsonNullableFilter<"Product">
    hardware_space?: JsonNullableFilter<"Product">
    createdAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    product_tags?: Product_tagsListRelationFilter
    products_hardware?: Products_hardwareListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    cover_image?: SortOrderInput | SortOrder
    spec_pdf_url?: SortOrderInput | SortOrder
    is_active?: SortOrder
    description_i18n?: SortOrderInput | SortOrder
    software_space?: SortOrderInput | SortOrder
    hardware_space?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    cover_image?: StringNullableWithAggregatesFilter<"Product"> | string | null
    spec_pdf_url?: StringNullableWithAggregatesFilter<"Product"> | string | null
    is_active?: BoolWithAggregatesFilter<"Product"> | boolean
    description_i18n?: JsonNullableWithAggregatesFilter<"Product">
    software_space?: JsonNullableWithAggregatesFilter<"Product">
    hardware_space?: JsonNullableWithAggregatesFilter<"Product">
    createdAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
  }

  export type product_tagsWhereInput = {
    AND?: product_tagsWhereInput | product_tagsWhereInput[]
    OR?: product_tagsWhereInput[]
    NOT?: product_tagsWhereInput | product_tagsWhereInput[]
    product_id?: UuidFilter<"product_tags"> | string
    tag_id?: UuidFilter<"product_tags"> | string
    product_name?: StringNullableFilter<"product_tags"> | string | null
    tag_spec?: StringNullableFilter<"product_tags"> | string | null
    tag_size?: StringNullableFilter<"product_tags"> | string | null
    products?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    tags?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }

  export type product_tagsOrderByWithRelationInput = {
    product_id?: SortOrder
    tag_id?: SortOrder
    product_name?: SortOrderInput | SortOrder
    tag_spec?: SortOrderInput | SortOrder
    tag_size?: SortOrderInput | SortOrder
    products?: ProductOrderByWithRelationInput
    tags?: tagsOrderByWithRelationInput
  }

  export type product_tagsWhereUniqueInput = Prisma.AtLeast<{
    product_id_tag_id?: product_tagsProduct_idTag_idCompoundUniqueInput
    AND?: product_tagsWhereInput | product_tagsWhereInput[]
    OR?: product_tagsWhereInput[]
    NOT?: product_tagsWhereInput | product_tagsWhereInput[]
    product_id?: UuidFilter<"product_tags"> | string
    tag_id?: UuidFilter<"product_tags"> | string
    product_name?: StringNullableFilter<"product_tags"> | string | null
    tag_spec?: StringNullableFilter<"product_tags"> | string | null
    tag_size?: StringNullableFilter<"product_tags"> | string | null
    products?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    tags?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }, "product_id_tag_id">

  export type product_tagsOrderByWithAggregationInput = {
    product_id?: SortOrder
    tag_id?: SortOrder
    product_name?: SortOrderInput | SortOrder
    tag_spec?: SortOrderInput | SortOrder
    tag_size?: SortOrderInput | SortOrder
    _count?: product_tagsCountOrderByAggregateInput
    _max?: product_tagsMaxOrderByAggregateInput
    _min?: product_tagsMinOrderByAggregateInput
  }

  export type product_tagsScalarWhereWithAggregatesInput = {
    AND?: product_tagsScalarWhereWithAggregatesInput | product_tagsScalarWhereWithAggregatesInput[]
    OR?: product_tagsScalarWhereWithAggregatesInput[]
    NOT?: product_tagsScalarWhereWithAggregatesInput | product_tagsScalarWhereWithAggregatesInput[]
    product_id?: UuidWithAggregatesFilter<"product_tags"> | string
    tag_id?: UuidWithAggregatesFilter<"product_tags"> | string
    product_name?: StringNullableWithAggregatesFilter<"product_tags"> | string | null
    tag_spec?: StringNullableWithAggregatesFilter<"product_tags"> | string | null
    tag_size?: StringNullableWithAggregatesFilter<"product_tags"> | string | null
  }

  export type products_hardwareWhereInput = {
    AND?: products_hardwareWhereInput | products_hardwareWhereInput[]
    OR?: products_hardwareWhereInput[]
    NOT?: products_hardwareWhereInput | products_hardwareWhereInput[]
    id?: UuidFilter<"products_hardware"> | string
    products_id?: UuidFilter<"products_hardware"> | string
    controller_count?: IntNullableFilter<"products_hardware"> | number | null
    cpu_model?: StringNullableFilter<"products_hardware"> | string | null
    cpu_count?: IntNullableFilter<"products_hardware"> | number | null
    cpu_cores?: IntNullableFilter<"products_hardware"> | number | null
    cpu_architecture?: StringNullableFilter<"products_hardware"> | string | null
    cpu_base_clock?: DecimalNullableFilter<"products_hardware"> | Decimal | DecimalJsLike | number | string | null
    cpu_turbo_clock?: DecimalNullableFilter<"products_hardware"> | Decimal | DecimalJsLike | number | string | null
    hardware_encryption?: StringNullableFilter<"products_hardware"> | string | null
    memory_total?: StringNullableFilter<"products_hardware"> | string | null
    memory_installed?: StringNullableFilter<"products_hardware"> | string | null
    memory_slots?: IntNullableFilter<"products_hardware"> | number | null
    memory_max?: JsonNullableFilter<"products_hardware">
    disk_bays?: IntNullableFilter<"products_hardware"> | number | null
    disk_bays_max?: IntNullableFilter<"products_hardware"> | number | null
    disk_types_supported?: JsonNullableFilter<"products_hardware">
    m2_slot?: BoolNullableFilter<"products_hardware"> | boolean | null
    disk_host_swappable?: BoolNullableFilter<"products_hardware"> | boolean | null
    lan_rj45_1G?: IntNullableFilter<"products_hardware"> | number | null
    lan_rj45_2_5G?: IntNullableFilter<"products_hardware"> | number | null
    lan_rj45_10G?: IntNullableFilter<"products_hardware"> | number | null
    management_prot?: BoolNullableFilter<"products_hardware"> | boolean | null
    max_lax_ports?: IntNullableFilter<"products_hardware"> | number | null
    usb_3_2_prots?: IntNullableFilter<"products_hardware"> | number | null
    expansion_ports?: IntNullableFilter<"products_hardware"> | number | null
    expansion_port_types?: StringNullableFilter<"products_hardware"> | string | null
    pcie_expansion?: StringNullableFilter<"products_hardware"> | string | null
    chassis_type?: StringNullableFilter<"products_hardware"> | string | null
    dimensions?: StringNullableFilter<"products_hardware"> | string | null
    rack_mount_kit?: StringNullableFilter<"products_hardware"> | string | null
    fan_size?: StringNullableFilter<"products_hardware"> | string | null
    fan_replaceable?: BoolNullableFilter<"products_hardware"> | boolean | null
    led_brightness_adj?: BoolNullableFilter<"products_hardware"> | boolean | null
    auto_power_recovery?: BoolNullableFilter<"products_hardware"> | boolean | null
    noise_lenel?: StringNullableFilter<"products_hardware"> | string | null
    scheduled_power?: BoolNullableFilter<"products_hardware"> | boolean | null
    wake_on_lan?: BoolNullableFilter<"products_hardware"> | boolean | null
    dual_power_supply?: BoolNullableFilter<"products_hardware"> | boolean | null
    ac_input_voltage?: StringNullableFilter<"products_hardware"> | string | null
    frequency?: StringNullableFilter<"products_hardware"> | string | null
    power_consumption?: StringNullableFilter<"products_hardware"> | string | null
    working_temperature?: StringNullableFilter<"products_hardware"> | string | null
    storage_temperature?: StringNullableFilter<"products_hardware"> | string | null
    relative_humidity?: StringNullableFilter<"products_hardware"> | string | null
    certifications?: JsonNullableFilter<"products_hardware">
    warranty?: StringNullableFilter<"products_hardware"> | string | null
    environmental_compliance?: StringNullableFilter<"products_hardware"> | string | null
    package_contents?: JsonNullableFilter<"products_hardware">
    optional_accessories?: JsonNullableFilter<"products_hardware">
    cpu_threads?: IntNullableFilter<"products_hardware"> | number | null
    products?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type products_hardwareOrderByWithRelationInput = {
    id?: SortOrder
    products_id?: SortOrder
    controller_count?: SortOrderInput | SortOrder
    cpu_model?: SortOrderInput | SortOrder
    cpu_count?: SortOrderInput | SortOrder
    cpu_cores?: SortOrderInput | SortOrder
    cpu_architecture?: SortOrderInput | SortOrder
    cpu_base_clock?: SortOrderInput | SortOrder
    cpu_turbo_clock?: SortOrderInput | SortOrder
    hardware_encryption?: SortOrderInput | SortOrder
    memory_total?: SortOrderInput | SortOrder
    memory_installed?: SortOrderInput | SortOrder
    memory_slots?: SortOrderInput | SortOrder
    memory_max?: SortOrderInput | SortOrder
    disk_bays?: SortOrderInput | SortOrder
    disk_bays_max?: SortOrderInput | SortOrder
    disk_types_supported?: SortOrderInput | SortOrder
    m2_slot?: SortOrderInput | SortOrder
    disk_host_swappable?: SortOrderInput | SortOrder
    lan_rj45_1G?: SortOrderInput | SortOrder
    lan_rj45_2_5G?: SortOrderInput | SortOrder
    lan_rj45_10G?: SortOrderInput | SortOrder
    management_prot?: SortOrderInput | SortOrder
    max_lax_ports?: SortOrderInput | SortOrder
    usb_3_2_prots?: SortOrderInput | SortOrder
    expansion_ports?: SortOrderInput | SortOrder
    expansion_port_types?: SortOrderInput | SortOrder
    pcie_expansion?: SortOrderInput | SortOrder
    chassis_type?: SortOrderInput | SortOrder
    dimensions?: SortOrderInput | SortOrder
    rack_mount_kit?: SortOrderInput | SortOrder
    fan_size?: SortOrderInput | SortOrder
    fan_replaceable?: SortOrderInput | SortOrder
    led_brightness_adj?: SortOrderInput | SortOrder
    auto_power_recovery?: SortOrderInput | SortOrder
    noise_lenel?: SortOrderInput | SortOrder
    scheduled_power?: SortOrderInput | SortOrder
    wake_on_lan?: SortOrderInput | SortOrder
    dual_power_supply?: SortOrderInput | SortOrder
    ac_input_voltage?: SortOrderInput | SortOrder
    frequency?: SortOrderInput | SortOrder
    power_consumption?: SortOrderInput | SortOrder
    working_temperature?: SortOrderInput | SortOrder
    storage_temperature?: SortOrderInput | SortOrder
    relative_humidity?: SortOrderInput | SortOrder
    certifications?: SortOrderInput | SortOrder
    warranty?: SortOrderInput | SortOrder
    environmental_compliance?: SortOrderInput | SortOrder
    package_contents?: SortOrderInput | SortOrder
    optional_accessories?: SortOrderInput | SortOrder
    cpu_threads?: SortOrderInput | SortOrder
    products?: ProductOrderByWithRelationInput
  }

  export type products_hardwareWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: products_hardwareWhereInput | products_hardwareWhereInput[]
    OR?: products_hardwareWhereInput[]
    NOT?: products_hardwareWhereInput | products_hardwareWhereInput[]
    products_id?: UuidFilter<"products_hardware"> | string
    controller_count?: IntNullableFilter<"products_hardware"> | number | null
    cpu_model?: StringNullableFilter<"products_hardware"> | string | null
    cpu_count?: IntNullableFilter<"products_hardware"> | number | null
    cpu_cores?: IntNullableFilter<"products_hardware"> | number | null
    cpu_architecture?: StringNullableFilter<"products_hardware"> | string | null
    cpu_base_clock?: DecimalNullableFilter<"products_hardware"> | Decimal | DecimalJsLike | number | string | null
    cpu_turbo_clock?: DecimalNullableFilter<"products_hardware"> | Decimal | DecimalJsLike | number | string | null
    hardware_encryption?: StringNullableFilter<"products_hardware"> | string | null
    memory_total?: StringNullableFilter<"products_hardware"> | string | null
    memory_installed?: StringNullableFilter<"products_hardware"> | string | null
    memory_slots?: IntNullableFilter<"products_hardware"> | number | null
    memory_max?: JsonNullableFilter<"products_hardware">
    disk_bays?: IntNullableFilter<"products_hardware"> | number | null
    disk_bays_max?: IntNullableFilter<"products_hardware"> | number | null
    disk_types_supported?: JsonNullableFilter<"products_hardware">
    m2_slot?: BoolNullableFilter<"products_hardware"> | boolean | null
    disk_host_swappable?: BoolNullableFilter<"products_hardware"> | boolean | null
    lan_rj45_1G?: IntNullableFilter<"products_hardware"> | number | null
    lan_rj45_2_5G?: IntNullableFilter<"products_hardware"> | number | null
    lan_rj45_10G?: IntNullableFilter<"products_hardware"> | number | null
    management_prot?: BoolNullableFilter<"products_hardware"> | boolean | null
    max_lax_ports?: IntNullableFilter<"products_hardware"> | number | null
    usb_3_2_prots?: IntNullableFilter<"products_hardware"> | number | null
    expansion_ports?: IntNullableFilter<"products_hardware"> | number | null
    expansion_port_types?: StringNullableFilter<"products_hardware"> | string | null
    pcie_expansion?: StringNullableFilter<"products_hardware"> | string | null
    chassis_type?: StringNullableFilter<"products_hardware"> | string | null
    dimensions?: StringNullableFilter<"products_hardware"> | string | null
    rack_mount_kit?: StringNullableFilter<"products_hardware"> | string | null
    fan_size?: StringNullableFilter<"products_hardware"> | string | null
    fan_replaceable?: BoolNullableFilter<"products_hardware"> | boolean | null
    led_brightness_adj?: BoolNullableFilter<"products_hardware"> | boolean | null
    auto_power_recovery?: BoolNullableFilter<"products_hardware"> | boolean | null
    noise_lenel?: StringNullableFilter<"products_hardware"> | string | null
    scheduled_power?: BoolNullableFilter<"products_hardware"> | boolean | null
    wake_on_lan?: BoolNullableFilter<"products_hardware"> | boolean | null
    dual_power_supply?: BoolNullableFilter<"products_hardware"> | boolean | null
    ac_input_voltage?: StringNullableFilter<"products_hardware"> | string | null
    frequency?: StringNullableFilter<"products_hardware"> | string | null
    power_consumption?: StringNullableFilter<"products_hardware"> | string | null
    working_temperature?: StringNullableFilter<"products_hardware"> | string | null
    storage_temperature?: StringNullableFilter<"products_hardware"> | string | null
    relative_humidity?: StringNullableFilter<"products_hardware"> | string | null
    certifications?: JsonNullableFilter<"products_hardware">
    warranty?: StringNullableFilter<"products_hardware"> | string | null
    environmental_compliance?: StringNullableFilter<"products_hardware"> | string | null
    package_contents?: JsonNullableFilter<"products_hardware">
    optional_accessories?: JsonNullableFilter<"products_hardware">
    cpu_threads?: IntNullableFilter<"products_hardware"> | number | null
    products?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type products_hardwareOrderByWithAggregationInput = {
    id?: SortOrder
    products_id?: SortOrder
    controller_count?: SortOrderInput | SortOrder
    cpu_model?: SortOrderInput | SortOrder
    cpu_count?: SortOrderInput | SortOrder
    cpu_cores?: SortOrderInput | SortOrder
    cpu_architecture?: SortOrderInput | SortOrder
    cpu_base_clock?: SortOrderInput | SortOrder
    cpu_turbo_clock?: SortOrderInput | SortOrder
    hardware_encryption?: SortOrderInput | SortOrder
    memory_total?: SortOrderInput | SortOrder
    memory_installed?: SortOrderInput | SortOrder
    memory_slots?: SortOrderInput | SortOrder
    memory_max?: SortOrderInput | SortOrder
    disk_bays?: SortOrderInput | SortOrder
    disk_bays_max?: SortOrderInput | SortOrder
    disk_types_supported?: SortOrderInput | SortOrder
    m2_slot?: SortOrderInput | SortOrder
    disk_host_swappable?: SortOrderInput | SortOrder
    lan_rj45_1G?: SortOrderInput | SortOrder
    lan_rj45_2_5G?: SortOrderInput | SortOrder
    lan_rj45_10G?: SortOrderInput | SortOrder
    management_prot?: SortOrderInput | SortOrder
    max_lax_ports?: SortOrderInput | SortOrder
    usb_3_2_prots?: SortOrderInput | SortOrder
    expansion_ports?: SortOrderInput | SortOrder
    expansion_port_types?: SortOrderInput | SortOrder
    pcie_expansion?: SortOrderInput | SortOrder
    chassis_type?: SortOrderInput | SortOrder
    dimensions?: SortOrderInput | SortOrder
    rack_mount_kit?: SortOrderInput | SortOrder
    fan_size?: SortOrderInput | SortOrder
    fan_replaceable?: SortOrderInput | SortOrder
    led_brightness_adj?: SortOrderInput | SortOrder
    auto_power_recovery?: SortOrderInput | SortOrder
    noise_lenel?: SortOrderInput | SortOrder
    scheduled_power?: SortOrderInput | SortOrder
    wake_on_lan?: SortOrderInput | SortOrder
    dual_power_supply?: SortOrderInput | SortOrder
    ac_input_voltage?: SortOrderInput | SortOrder
    frequency?: SortOrderInput | SortOrder
    power_consumption?: SortOrderInput | SortOrder
    working_temperature?: SortOrderInput | SortOrder
    storage_temperature?: SortOrderInput | SortOrder
    relative_humidity?: SortOrderInput | SortOrder
    certifications?: SortOrderInput | SortOrder
    warranty?: SortOrderInput | SortOrder
    environmental_compliance?: SortOrderInput | SortOrder
    package_contents?: SortOrderInput | SortOrder
    optional_accessories?: SortOrderInput | SortOrder
    cpu_threads?: SortOrderInput | SortOrder
    _count?: products_hardwareCountOrderByAggregateInput
    _avg?: products_hardwareAvgOrderByAggregateInput
    _max?: products_hardwareMaxOrderByAggregateInput
    _min?: products_hardwareMinOrderByAggregateInput
    _sum?: products_hardwareSumOrderByAggregateInput
  }

  export type products_hardwareScalarWhereWithAggregatesInput = {
    AND?: products_hardwareScalarWhereWithAggregatesInput | products_hardwareScalarWhereWithAggregatesInput[]
    OR?: products_hardwareScalarWhereWithAggregatesInput[]
    NOT?: products_hardwareScalarWhereWithAggregatesInput | products_hardwareScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"products_hardware"> | string
    products_id?: UuidWithAggregatesFilter<"products_hardware"> | string
    controller_count?: IntNullableWithAggregatesFilter<"products_hardware"> | number | null
    cpu_model?: StringNullableWithAggregatesFilter<"products_hardware"> | string | null
    cpu_count?: IntNullableWithAggregatesFilter<"products_hardware"> | number | null
    cpu_cores?: IntNullableWithAggregatesFilter<"products_hardware"> | number | null
    cpu_architecture?: StringNullableWithAggregatesFilter<"products_hardware"> | string | null
    cpu_base_clock?: DecimalNullableWithAggregatesFilter<"products_hardware"> | Decimal | DecimalJsLike | number | string | null
    cpu_turbo_clock?: DecimalNullableWithAggregatesFilter<"products_hardware"> | Decimal | DecimalJsLike | number | string | null
    hardware_encryption?: StringNullableWithAggregatesFilter<"products_hardware"> | string | null
    memory_total?: StringNullableWithAggregatesFilter<"products_hardware"> | string | null
    memory_installed?: StringNullableWithAggregatesFilter<"products_hardware"> | string | null
    memory_slots?: IntNullableWithAggregatesFilter<"products_hardware"> | number | null
    memory_max?: JsonNullableWithAggregatesFilter<"products_hardware">
    disk_bays?: IntNullableWithAggregatesFilter<"products_hardware"> | number | null
    disk_bays_max?: IntNullableWithAggregatesFilter<"products_hardware"> | number | null
    disk_types_supported?: JsonNullableWithAggregatesFilter<"products_hardware">
    m2_slot?: BoolNullableWithAggregatesFilter<"products_hardware"> | boolean | null
    disk_host_swappable?: BoolNullableWithAggregatesFilter<"products_hardware"> | boolean | null
    lan_rj45_1G?: IntNullableWithAggregatesFilter<"products_hardware"> | number | null
    lan_rj45_2_5G?: IntNullableWithAggregatesFilter<"products_hardware"> | number | null
    lan_rj45_10G?: IntNullableWithAggregatesFilter<"products_hardware"> | number | null
    management_prot?: BoolNullableWithAggregatesFilter<"products_hardware"> | boolean | null
    max_lax_ports?: IntNullableWithAggregatesFilter<"products_hardware"> | number | null
    usb_3_2_prots?: IntNullableWithAggregatesFilter<"products_hardware"> | number | null
    expansion_ports?: IntNullableWithAggregatesFilter<"products_hardware"> | number | null
    expansion_port_types?: StringNullableWithAggregatesFilter<"products_hardware"> | string | null
    pcie_expansion?: StringNullableWithAggregatesFilter<"products_hardware"> | string | null
    chassis_type?: StringNullableWithAggregatesFilter<"products_hardware"> | string | null
    dimensions?: StringNullableWithAggregatesFilter<"products_hardware"> | string | null
    rack_mount_kit?: StringNullableWithAggregatesFilter<"products_hardware"> | string | null
    fan_size?: StringNullableWithAggregatesFilter<"products_hardware"> | string | null
    fan_replaceable?: BoolNullableWithAggregatesFilter<"products_hardware"> | boolean | null
    led_brightness_adj?: BoolNullableWithAggregatesFilter<"products_hardware"> | boolean | null
    auto_power_recovery?: BoolNullableWithAggregatesFilter<"products_hardware"> | boolean | null
    noise_lenel?: StringNullableWithAggregatesFilter<"products_hardware"> | string | null
    scheduled_power?: BoolNullableWithAggregatesFilter<"products_hardware"> | boolean | null
    wake_on_lan?: BoolNullableWithAggregatesFilter<"products_hardware"> | boolean | null
    dual_power_supply?: BoolNullableWithAggregatesFilter<"products_hardware"> | boolean | null
    ac_input_voltage?: StringNullableWithAggregatesFilter<"products_hardware"> | string | null
    frequency?: StringNullableWithAggregatesFilter<"products_hardware"> | string | null
    power_consumption?: StringNullableWithAggregatesFilter<"products_hardware"> | string | null
    working_temperature?: StringNullableWithAggregatesFilter<"products_hardware"> | string | null
    storage_temperature?: StringNullableWithAggregatesFilter<"products_hardware"> | string | null
    relative_humidity?: StringNullableWithAggregatesFilter<"products_hardware"> | string | null
    certifications?: JsonNullableWithAggregatesFilter<"products_hardware">
    warranty?: StringNullableWithAggregatesFilter<"products_hardware"> | string | null
    environmental_compliance?: StringNullableWithAggregatesFilter<"products_hardware"> | string | null
    package_contents?: JsonNullableWithAggregatesFilter<"products_hardware">
    optional_accessories?: JsonNullableWithAggregatesFilter<"products_hardware">
    cpu_threads?: IntNullableWithAggregatesFilter<"products_hardware"> | number | null
  }

  export type tag_categoriesWhereInput = {
    AND?: tag_categoriesWhereInput | tag_categoriesWhereInput[]
    OR?: tag_categoriesWhereInput[]
    NOT?: tag_categoriesWhereInput | tag_categoriesWhereInput[]
    id?: UuidFilter<"tag_categories"> | string
    name?: StringFilter<"tag_categories"> | string
    sort?: IntNullableFilter<"tag_categories"> | number | null
    categories_type?: StringNullableFilter<"tag_categories"> | string | null
    tags?: TagsListRelationFilter
  }

  export type tag_categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sort?: SortOrderInput | SortOrder
    categories_type?: SortOrderInput | SortOrder
    tags?: tagsOrderByRelationAggregateInput
  }

  export type tag_categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tag_categoriesWhereInput | tag_categoriesWhereInput[]
    OR?: tag_categoriesWhereInput[]
    NOT?: tag_categoriesWhereInput | tag_categoriesWhereInput[]
    name?: StringFilter<"tag_categories"> | string
    sort?: IntNullableFilter<"tag_categories"> | number | null
    categories_type?: StringNullableFilter<"tag_categories"> | string | null
    tags?: TagsListRelationFilter
  }, "id">

  export type tag_categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sort?: SortOrderInput | SortOrder
    categories_type?: SortOrderInput | SortOrder
    _count?: tag_categoriesCountOrderByAggregateInput
    _avg?: tag_categoriesAvgOrderByAggregateInput
    _max?: tag_categoriesMaxOrderByAggregateInput
    _min?: tag_categoriesMinOrderByAggregateInput
    _sum?: tag_categoriesSumOrderByAggregateInput
  }

  export type tag_categoriesScalarWhereWithAggregatesInput = {
    AND?: tag_categoriesScalarWhereWithAggregatesInput | tag_categoriesScalarWhereWithAggregatesInput[]
    OR?: tag_categoriesScalarWhereWithAggregatesInput[]
    NOT?: tag_categoriesScalarWhereWithAggregatesInput | tag_categoriesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"tag_categories"> | string
    name?: StringWithAggregatesFilter<"tag_categories"> | string
    sort?: IntNullableWithAggregatesFilter<"tag_categories"> | number | null
    categories_type?: StringNullableWithAggregatesFilter<"tag_categories"> | string | null
  }

  export type tagsWhereInput = {
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    id?: UuidFilter<"tags"> | string
    created_id?: UuidFilter<"tags"> | string
    product_spec?: StringNullableFilter<"tags"> | string | null
    product_size?: StringNullableFilter<"tags"> | string | null
    sort_type?: IntNullableFilter<"tags"> | number | null
    sort_order?: IntNullableFilter<"tags"> | number | null
    spec_size?: StringNullableFilter<"tags"> | string | null
    product_tags?: Product_tagsListRelationFilter
    tag_categories?: XOR<Tag_categoriesScalarRelationFilter, tag_categoriesWhereInput>
  }

  export type tagsOrderByWithRelationInput = {
    id?: SortOrder
    created_id?: SortOrder
    product_spec?: SortOrderInput | SortOrder
    product_size?: SortOrderInput | SortOrder
    sort_type?: SortOrderInput | SortOrder
    sort_order?: SortOrderInput | SortOrder
    spec_size?: SortOrderInput | SortOrder
    product_tags?: product_tagsOrderByRelationAggregateInput
    tag_categories?: tag_categoriesOrderByWithRelationInput
  }

  export type tagsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    created_id?: UuidFilter<"tags"> | string
    product_spec?: StringNullableFilter<"tags"> | string | null
    product_size?: StringNullableFilter<"tags"> | string | null
    sort_type?: IntNullableFilter<"tags"> | number | null
    sort_order?: IntNullableFilter<"tags"> | number | null
    spec_size?: StringNullableFilter<"tags"> | string | null
    product_tags?: Product_tagsListRelationFilter
    tag_categories?: XOR<Tag_categoriesScalarRelationFilter, tag_categoriesWhereInput>
  }, "id">

  export type tagsOrderByWithAggregationInput = {
    id?: SortOrder
    created_id?: SortOrder
    product_spec?: SortOrderInput | SortOrder
    product_size?: SortOrderInput | SortOrder
    sort_type?: SortOrderInput | SortOrder
    sort_order?: SortOrderInput | SortOrder
    spec_size?: SortOrderInput | SortOrder
    _count?: tagsCountOrderByAggregateInput
    _avg?: tagsAvgOrderByAggregateInput
    _max?: tagsMaxOrderByAggregateInput
    _min?: tagsMinOrderByAggregateInput
    _sum?: tagsSumOrderByAggregateInput
  }

  export type tagsScalarWhereWithAggregatesInput = {
    AND?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    OR?: tagsScalarWhereWithAggregatesInput[]
    NOT?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"tags"> | string
    created_id?: UuidWithAggregatesFilter<"tags"> | string
    product_spec?: StringNullableWithAggregatesFilter<"tags"> | string | null
    product_size?: StringNullableWithAggregatesFilter<"tags"> | string | null
    sort_type?: IntNullableWithAggregatesFilter<"tags"> | number | null
    sort_order?: IntNullableWithAggregatesFilter<"tags"> | number | null
    spec_size?: StringNullableWithAggregatesFilter<"tags"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FooterWhereInput = {
    AND?: FooterWhereInput | FooterWhereInput[]
    OR?: FooterWhereInput[]
    NOT?: FooterWhereInput | FooterWhereInput[]
    id?: UuidFilter<"Footer"> | string
    icpNumber?: StringNullableFilter<"Footer"> | string | null
    icpLink?: StringNullableFilter<"Footer"> | string | null
    copyright?: StringNullableFilter<"Footer"> | string | null
    isActive?: BoolFilter<"Footer"> | boolean
    createdAt?: DateTimeFilter<"Footer"> | Date | string
    updatedAt?: DateTimeFilter<"Footer"> | Date | string
    links?: FooterLinkListRelationFilter
  }

  export type FooterOrderByWithRelationInput = {
    id?: SortOrder
    icpNumber?: SortOrderInput | SortOrder
    icpLink?: SortOrderInput | SortOrder
    copyright?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    links?: FooterLinkOrderByRelationAggregateInput
  }

  export type FooterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FooterWhereInput | FooterWhereInput[]
    OR?: FooterWhereInput[]
    NOT?: FooterWhereInput | FooterWhereInput[]
    icpNumber?: StringNullableFilter<"Footer"> | string | null
    icpLink?: StringNullableFilter<"Footer"> | string | null
    copyright?: StringNullableFilter<"Footer"> | string | null
    isActive?: BoolFilter<"Footer"> | boolean
    createdAt?: DateTimeFilter<"Footer"> | Date | string
    updatedAt?: DateTimeFilter<"Footer"> | Date | string
    links?: FooterLinkListRelationFilter
  }, "id">

  export type FooterOrderByWithAggregationInput = {
    id?: SortOrder
    icpNumber?: SortOrderInput | SortOrder
    icpLink?: SortOrderInput | SortOrder
    copyright?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FooterCountOrderByAggregateInput
    _max?: FooterMaxOrderByAggregateInput
    _min?: FooterMinOrderByAggregateInput
  }

  export type FooterScalarWhereWithAggregatesInput = {
    AND?: FooterScalarWhereWithAggregatesInput | FooterScalarWhereWithAggregatesInput[]
    OR?: FooterScalarWhereWithAggregatesInput[]
    NOT?: FooterScalarWhereWithAggregatesInput | FooterScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Footer"> | string
    icpNumber?: StringNullableWithAggregatesFilter<"Footer"> | string | null
    icpLink?: StringNullableWithAggregatesFilter<"Footer"> | string | null
    copyright?: StringNullableWithAggregatesFilter<"Footer"> | string | null
    isActive?: BoolWithAggregatesFilter<"Footer"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Footer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Footer"> | Date | string
  }

  export type FooterLinkWhereInput = {
    AND?: FooterLinkWhereInput | FooterLinkWhereInput[]
    OR?: FooterLinkWhereInput[]
    NOT?: FooterLinkWhereInput | FooterLinkWhereInput[]
    id?: UuidFilter<"FooterLink"> | string
    title?: StringFilter<"FooterLink"> | string
    url?: StringFilter<"FooterLink"> | string
    category?: StringFilter<"FooterLink"> | string
    icon?: StringNullableFilter<"FooterLink"> | string | null
    sortOrder?: IntFilter<"FooterLink"> | number
    isActive?: BoolFilter<"FooterLink"> | boolean
    footerId?: UuidFilter<"FooterLink"> | string
    createdAt?: DateTimeFilter<"FooterLink"> | Date | string
    updatedAt?: DateTimeFilter<"FooterLink"> | Date | string
    footer?: XOR<FooterScalarRelationFilter, FooterWhereInput>
  }

  export type FooterLinkOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    category?: SortOrder
    icon?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    footerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    footer?: FooterOrderByWithRelationInput
  }

  export type FooterLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FooterLinkWhereInput | FooterLinkWhereInput[]
    OR?: FooterLinkWhereInput[]
    NOT?: FooterLinkWhereInput | FooterLinkWhereInput[]
    title?: StringFilter<"FooterLink"> | string
    url?: StringFilter<"FooterLink"> | string
    category?: StringFilter<"FooterLink"> | string
    icon?: StringNullableFilter<"FooterLink"> | string | null
    sortOrder?: IntFilter<"FooterLink"> | number
    isActive?: BoolFilter<"FooterLink"> | boolean
    footerId?: UuidFilter<"FooterLink"> | string
    createdAt?: DateTimeFilter<"FooterLink"> | Date | string
    updatedAt?: DateTimeFilter<"FooterLink"> | Date | string
    footer?: XOR<FooterScalarRelationFilter, FooterWhereInput>
  }, "id">

  export type FooterLinkOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    category?: SortOrder
    icon?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    footerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FooterLinkCountOrderByAggregateInput
    _avg?: FooterLinkAvgOrderByAggregateInput
    _max?: FooterLinkMaxOrderByAggregateInput
    _min?: FooterLinkMinOrderByAggregateInput
    _sum?: FooterLinkSumOrderByAggregateInput
  }

  export type FooterLinkScalarWhereWithAggregatesInput = {
    AND?: FooterLinkScalarWhereWithAggregatesInput | FooterLinkScalarWhereWithAggregatesInput[]
    OR?: FooterLinkScalarWhereWithAggregatesInput[]
    NOT?: FooterLinkScalarWhereWithAggregatesInput | FooterLinkScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"FooterLink"> | string
    title?: StringWithAggregatesFilter<"FooterLink"> | string
    url?: StringWithAggregatesFilter<"FooterLink"> | string
    category?: StringWithAggregatesFilter<"FooterLink"> | string
    icon?: StringNullableWithAggregatesFilter<"FooterLink"> | string | null
    sortOrder?: IntWithAggregatesFilter<"FooterLink"> | number
    isActive?: BoolWithAggregatesFilter<"FooterLink"> | boolean
    footerId?: UuidWithAggregatesFilter<"FooterLink"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FooterLink"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FooterLink"> | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    name?: string
    description?: string | null
    cover_image?: string | null
    spec_pdf_url?: string | null
    is_active?: boolean
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    software_space?: NullableJsonNullValueInput | InputJsonValue
    hardware_space?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    product_tags?: product_tagsCreateNestedManyWithoutProductsInput
    products_hardware?: products_hardwareCreateNestedManyWithoutProductsInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name?: string
    description?: string | null
    cover_image?: string | null
    spec_pdf_url?: string | null
    is_active?: boolean
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    software_space?: NullableJsonNullValueInput | InputJsonValue
    hardware_space?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    product_tags?: product_tagsUncheckedCreateNestedManyWithoutProductsInput
    products_hardware?: products_hardwareUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    spec_pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    software_space?: NullableJsonNullValueInput | InputJsonValue
    hardware_space?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_tags?: product_tagsUpdateManyWithoutProductsNestedInput
    products_hardware?: products_hardwareUpdateManyWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    spec_pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    software_space?: NullableJsonNullValueInput | InputJsonValue
    hardware_space?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_tags?: product_tagsUncheckedUpdateManyWithoutProductsNestedInput
    products_hardware?: products_hardwareUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name?: string
    description?: string | null
    cover_image?: string | null
    spec_pdf_url?: string | null
    is_active?: boolean
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    software_space?: NullableJsonNullValueInput | InputJsonValue
    hardware_space?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    spec_pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    software_space?: NullableJsonNullValueInput | InputJsonValue
    hardware_space?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    spec_pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    software_space?: NullableJsonNullValueInput | InputJsonValue
    hardware_space?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_tagsCreateInput = {
    product_name?: string | null
    tag_spec?: string | null
    tag_size?: string | null
    products?: ProductCreateNestedOneWithoutProduct_tagsInput
    tags?: tagsCreateNestedOneWithoutProduct_tagsInput
  }

  export type product_tagsUncheckedCreateInput = {
    product_id?: string
    tag_id?: string
    product_name?: string | null
    tag_spec?: string | null
    tag_size?: string | null
  }

  export type product_tagsUpdateInput = {
    product_name?: NullableStringFieldUpdateOperationsInput | string | null
    tag_spec?: NullableStringFieldUpdateOperationsInput | string | null
    tag_size?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUpdateOneRequiredWithoutProduct_tagsNestedInput
    tags?: tagsUpdateOneRequiredWithoutProduct_tagsNestedInput
  }

  export type product_tagsUncheckedUpdateInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
    product_name?: NullableStringFieldUpdateOperationsInput | string | null
    tag_spec?: NullableStringFieldUpdateOperationsInput | string | null
    tag_size?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type product_tagsCreateManyInput = {
    product_id?: string
    tag_id?: string
    product_name?: string | null
    tag_spec?: string | null
    tag_size?: string | null
  }

  export type product_tagsUpdateManyMutationInput = {
    product_name?: NullableStringFieldUpdateOperationsInput | string | null
    tag_spec?: NullableStringFieldUpdateOperationsInput | string | null
    tag_size?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type product_tagsUncheckedUpdateManyInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
    product_name?: NullableStringFieldUpdateOperationsInput | string | null
    tag_spec?: NullableStringFieldUpdateOperationsInput | string | null
    tag_size?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type products_hardwareCreateInput = {
    id?: string
    controller_count?: number | null
    cpu_model?: string | null
    cpu_count?: number | null
    cpu_cores?: number | null
    cpu_architecture?: string | null
    cpu_base_clock?: Decimal | DecimalJsLike | number | string | null
    cpu_turbo_clock?: Decimal | DecimalJsLike | number | string | null
    hardware_encryption?: string | null
    memory_total?: string | null
    memory_installed?: string | null
    memory_slots?: number | null
    memory_max?: NullableJsonNullValueInput | InputJsonValue
    disk_bays?: number | null
    disk_bays_max?: number | null
    disk_types_supported?: NullableJsonNullValueInput | InputJsonValue
    m2_slot?: boolean | null
    disk_host_swappable?: boolean | null
    lan_rj45_1G?: number | null
    lan_rj45_2_5G?: number | null
    lan_rj45_10G?: number | null
    management_prot?: boolean | null
    max_lax_ports?: number | null
    usb_3_2_prots?: number | null
    expansion_ports?: number | null
    expansion_port_types?: string | null
    pcie_expansion?: string | null
    chassis_type?: string | null
    dimensions?: string | null
    rack_mount_kit?: string | null
    fan_size?: string | null
    fan_replaceable?: boolean | null
    led_brightness_adj?: boolean | null
    auto_power_recovery?: boolean | null
    noise_lenel?: string | null
    scheduled_power?: boolean | null
    wake_on_lan?: boolean | null
    dual_power_supply?: boolean | null
    ac_input_voltage?: string | null
    frequency?: string | null
    power_consumption?: string | null
    working_temperature?: string | null
    storage_temperature?: string | null
    relative_humidity?: string | null
    certifications?: NullableJsonNullValueInput | InputJsonValue
    warranty?: string | null
    environmental_compliance?: string | null
    package_contents?: NullableJsonNullValueInput | InputJsonValue
    optional_accessories?: NullableJsonNullValueInput | InputJsonValue
    cpu_threads?: number | null
    products?: ProductCreateNestedOneWithoutProducts_hardwareInput
  }

  export type products_hardwareUncheckedCreateInput = {
    id?: string
    products_id?: string
    controller_count?: number | null
    cpu_model?: string | null
    cpu_count?: number | null
    cpu_cores?: number | null
    cpu_architecture?: string | null
    cpu_base_clock?: Decimal | DecimalJsLike | number | string | null
    cpu_turbo_clock?: Decimal | DecimalJsLike | number | string | null
    hardware_encryption?: string | null
    memory_total?: string | null
    memory_installed?: string | null
    memory_slots?: number | null
    memory_max?: NullableJsonNullValueInput | InputJsonValue
    disk_bays?: number | null
    disk_bays_max?: number | null
    disk_types_supported?: NullableJsonNullValueInput | InputJsonValue
    m2_slot?: boolean | null
    disk_host_swappable?: boolean | null
    lan_rj45_1G?: number | null
    lan_rj45_2_5G?: number | null
    lan_rj45_10G?: number | null
    management_prot?: boolean | null
    max_lax_ports?: number | null
    usb_3_2_prots?: number | null
    expansion_ports?: number | null
    expansion_port_types?: string | null
    pcie_expansion?: string | null
    chassis_type?: string | null
    dimensions?: string | null
    rack_mount_kit?: string | null
    fan_size?: string | null
    fan_replaceable?: boolean | null
    led_brightness_adj?: boolean | null
    auto_power_recovery?: boolean | null
    noise_lenel?: string | null
    scheduled_power?: boolean | null
    wake_on_lan?: boolean | null
    dual_power_supply?: boolean | null
    ac_input_voltage?: string | null
    frequency?: string | null
    power_consumption?: string | null
    working_temperature?: string | null
    storage_temperature?: string | null
    relative_humidity?: string | null
    certifications?: NullableJsonNullValueInput | InputJsonValue
    warranty?: string | null
    environmental_compliance?: string | null
    package_contents?: NullableJsonNullValueInput | InputJsonValue
    optional_accessories?: NullableJsonNullValueInput | InputJsonValue
    cpu_threads?: number | null
  }

  export type products_hardwareUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    controller_count?: NullableIntFieldUpdateOperationsInput | number | null
    cpu_model?: NullableStringFieldUpdateOperationsInput | string | null
    cpu_count?: NullableIntFieldUpdateOperationsInput | number | null
    cpu_cores?: NullableIntFieldUpdateOperationsInput | number | null
    cpu_architecture?: NullableStringFieldUpdateOperationsInput | string | null
    cpu_base_clock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cpu_turbo_clock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hardware_encryption?: NullableStringFieldUpdateOperationsInput | string | null
    memory_total?: NullableStringFieldUpdateOperationsInput | string | null
    memory_installed?: NullableStringFieldUpdateOperationsInput | string | null
    memory_slots?: NullableIntFieldUpdateOperationsInput | number | null
    memory_max?: NullableJsonNullValueInput | InputJsonValue
    disk_bays?: NullableIntFieldUpdateOperationsInput | number | null
    disk_bays_max?: NullableIntFieldUpdateOperationsInput | number | null
    disk_types_supported?: NullableJsonNullValueInput | InputJsonValue
    m2_slot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    disk_host_swappable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lan_rj45_1G?: NullableIntFieldUpdateOperationsInput | number | null
    lan_rj45_2_5G?: NullableIntFieldUpdateOperationsInput | number | null
    lan_rj45_10G?: NullableIntFieldUpdateOperationsInput | number | null
    management_prot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    max_lax_ports?: NullableIntFieldUpdateOperationsInput | number | null
    usb_3_2_prots?: NullableIntFieldUpdateOperationsInput | number | null
    expansion_ports?: NullableIntFieldUpdateOperationsInput | number | null
    expansion_port_types?: NullableStringFieldUpdateOperationsInput | string | null
    pcie_expansion?: NullableStringFieldUpdateOperationsInput | string | null
    chassis_type?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    rack_mount_kit?: NullableStringFieldUpdateOperationsInput | string | null
    fan_size?: NullableStringFieldUpdateOperationsInput | string | null
    fan_replaceable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    led_brightness_adj?: NullableBoolFieldUpdateOperationsInput | boolean | null
    auto_power_recovery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    noise_lenel?: NullableStringFieldUpdateOperationsInput | string | null
    scheduled_power?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wake_on_lan?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dual_power_supply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ac_input_voltage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    power_consumption?: NullableStringFieldUpdateOperationsInput | string | null
    working_temperature?: NullableStringFieldUpdateOperationsInput | string | null
    storage_temperature?: NullableStringFieldUpdateOperationsInput | string | null
    relative_humidity?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: NullableJsonNullValueInput | InputJsonValue
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
    environmental_compliance?: NullableStringFieldUpdateOperationsInput | string | null
    package_contents?: NullableJsonNullValueInput | InputJsonValue
    optional_accessories?: NullableJsonNullValueInput | InputJsonValue
    cpu_threads?: NullableIntFieldUpdateOperationsInput | number | null
    products?: ProductUpdateOneRequiredWithoutProducts_hardwareNestedInput
  }

  export type products_hardwareUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    products_id?: StringFieldUpdateOperationsInput | string
    controller_count?: NullableIntFieldUpdateOperationsInput | number | null
    cpu_model?: NullableStringFieldUpdateOperationsInput | string | null
    cpu_count?: NullableIntFieldUpdateOperationsInput | number | null
    cpu_cores?: NullableIntFieldUpdateOperationsInput | number | null
    cpu_architecture?: NullableStringFieldUpdateOperationsInput | string | null
    cpu_base_clock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cpu_turbo_clock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hardware_encryption?: NullableStringFieldUpdateOperationsInput | string | null
    memory_total?: NullableStringFieldUpdateOperationsInput | string | null
    memory_installed?: NullableStringFieldUpdateOperationsInput | string | null
    memory_slots?: NullableIntFieldUpdateOperationsInput | number | null
    memory_max?: NullableJsonNullValueInput | InputJsonValue
    disk_bays?: NullableIntFieldUpdateOperationsInput | number | null
    disk_bays_max?: NullableIntFieldUpdateOperationsInput | number | null
    disk_types_supported?: NullableJsonNullValueInput | InputJsonValue
    m2_slot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    disk_host_swappable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lan_rj45_1G?: NullableIntFieldUpdateOperationsInput | number | null
    lan_rj45_2_5G?: NullableIntFieldUpdateOperationsInput | number | null
    lan_rj45_10G?: NullableIntFieldUpdateOperationsInput | number | null
    management_prot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    max_lax_ports?: NullableIntFieldUpdateOperationsInput | number | null
    usb_3_2_prots?: NullableIntFieldUpdateOperationsInput | number | null
    expansion_ports?: NullableIntFieldUpdateOperationsInput | number | null
    expansion_port_types?: NullableStringFieldUpdateOperationsInput | string | null
    pcie_expansion?: NullableStringFieldUpdateOperationsInput | string | null
    chassis_type?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    rack_mount_kit?: NullableStringFieldUpdateOperationsInput | string | null
    fan_size?: NullableStringFieldUpdateOperationsInput | string | null
    fan_replaceable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    led_brightness_adj?: NullableBoolFieldUpdateOperationsInput | boolean | null
    auto_power_recovery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    noise_lenel?: NullableStringFieldUpdateOperationsInput | string | null
    scheduled_power?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wake_on_lan?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dual_power_supply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ac_input_voltage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    power_consumption?: NullableStringFieldUpdateOperationsInput | string | null
    working_temperature?: NullableStringFieldUpdateOperationsInput | string | null
    storage_temperature?: NullableStringFieldUpdateOperationsInput | string | null
    relative_humidity?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: NullableJsonNullValueInput | InputJsonValue
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
    environmental_compliance?: NullableStringFieldUpdateOperationsInput | string | null
    package_contents?: NullableJsonNullValueInput | InputJsonValue
    optional_accessories?: NullableJsonNullValueInput | InputJsonValue
    cpu_threads?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type products_hardwareCreateManyInput = {
    id?: string
    products_id?: string
    controller_count?: number | null
    cpu_model?: string | null
    cpu_count?: number | null
    cpu_cores?: number | null
    cpu_architecture?: string | null
    cpu_base_clock?: Decimal | DecimalJsLike | number | string | null
    cpu_turbo_clock?: Decimal | DecimalJsLike | number | string | null
    hardware_encryption?: string | null
    memory_total?: string | null
    memory_installed?: string | null
    memory_slots?: number | null
    memory_max?: NullableJsonNullValueInput | InputJsonValue
    disk_bays?: number | null
    disk_bays_max?: number | null
    disk_types_supported?: NullableJsonNullValueInput | InputJsonValue
    m2_slot?: boolean | null
    disk_host_swappable?: boolean | null
    lan_rj45_1G?: number | null
    lan_rj45_2_5G?: number | null
    lan_rj45_10G?: number | null
    management_prot?: boolean | null
    max_lax_ports?: number | null
    usb_3_2_prots?: number | null
    expansion_ports?: number | null
    expansion_port_types?: string | null
    pcie_expansion?: string | null
    chassis_type?: string | null
    dimensions?: string | null
    rack_mount_kit?: string | null
    fan_size?: string | null
    fan_replaceable?: boolean | null
    led_brightness_adj?: boolean | null
    auto_power_recovery?: boolean | null
    noise_lenel?: string | null
    scheduled_power?: boolean | null
    wake_on_lan?: boolean | null
    dual_power_supply?: boolean | null
    ac_input_voltage?: string | null
    frequency?: string | null
    power_consumption?: string | null
    working_temperature?: string | null
    storage_temperature?: string | null
    relative_humidity?: string | null
    certifications?: NullableJsonNullValueInput | InputJsonValue
    warranty?: string | null
    environmental_compliance?: string | null
    package_contents?: NullableJsonNullValueInput | InputJsonValue
    optional_accessories?: NullableJsonNullValueInput | InputJsonValue
    cpu_threads?: number | null
  }

  export type products_hardwareUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    controller_count?: NullableIntFieldUpdateOperationsInput | number | null
    cpu_model?: NullableStringFieldUpdateOperationsInput | string | null
    cpu_count?: NullableIntFieldUpdateOperationsInput | number | null
    cpu_cores?: NullableIntFieldUpdateOperationsInput | number | null
    cpu_architecture?: NullableStringFieldUpdateOperationsInput | string | null
    cpu_base_clock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cpu_turbo_clock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hardware_encryption?: NullableStringFieldUpdateOperationsInput | string | null
    memory_total?: NullableStringFieldUpdateOperationsInput | string | null
    memory_installed?: NullableStringFieldUpdateOperationsInput | string | null
    memory_slots?: NullableIntFieldUpdateOperationsInput | number | null
    memory_max?: NullableJsonNullValueInput | InputJsonValue
    disk_bays?: NullableIntFieldUpdateOperationsInput | number | null
    disk_bays_max?: NullableIntFieldUpdateOperationsInput | number | null
    disk_types_supported?: NullableJsonNullValueInput | InputJsonValue
    m2_slot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    disk_host_swappable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lan_rj45_1G?: NullableIntFieldUpdateOperationsInput | number | null
    lan_rj45_2_5G?: NullableIntFieldUpdateOperationsInput | number | null
    lan_rj45_10G?: NullableIntFieldUpdateOperationsInput | number | null
    management_prot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    max_lax_ports?: NullableIntFieldUpdateOperationsInput | number | null
    usb_3_2_prots?: NullableIntFieldUpdateOperationsInput | number | null
    expansion_ports?: NullableIntFieldUpdateOperationsInput | number | null
    expansion_port_types?: NullableStringFieldUpdateOperationsInput | string | null
    pcie_expansion?: NullableStringFieldUpdateOperationsInput | string | null
    chassis_type?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    rack_mount_kit?: NullableStringFieldUpdateOperationsInput | string | null
    fan_size?: NullableStringFieldUpdateOperationsInput | string | null
    fan_replaceable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    led_brightness_adj?: NullableBoolFieldUpdateOperationsInput | boolean | null
    auto_power_recovery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    noise_lenel?: NullableStringFieldUpdateOperationsInput | string | null
    scheduled_power?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wake_on_lan?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dual_power_supply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ac_input_voltage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    power_consumption?: NullableStringFieldUpdateOperationsInput | string | null
    working_temperature?: NullableStringFieldUpdateOperationsInput | string | null
    storage_temperature?: NullableStringFieldUpdateOperationsInput | string | null
    relative_humidity?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: NullableJsonNullValueInput | InputJsonValue
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
    environmental_compliance?: NullableStringFieldUpdateOperationsInput | string | null
    package_contents?: NullableJsonNullValueInput | InputJsonValue
    optional_accessories?: NullableJsonNullValueInput | InputJsonValue
    cpu_threads?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type products_hardwareUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    products_id?: StringFieldUpdateOperationsInput | string
    controller_count?: NullableIntFieldUpdateOperationsInput | number | null
    cpu_model?: NullableStringFieldUpdateOperationsInput | string | null
    cpu_count?: NullableIntFieldUpdateOperationsInput | number | null
    cpu_cores?: NullableIntFieldUpdateOperationsInput | number | null
    cpu_architecture?: NullableStringFieldUpdateOperationsInput | string | null
    cpu_base_clock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cpu_turbo_clock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hardware_encryption?: NullableStringFieldUpdateOperationsInput | string | null
    memory_total?: NullableStringFieldUpdateOperationsInput | string | null
    memory_installed?: NullableStringFieldUpdateOperationsInput | string | null
    memory_slots?: NullableIntFieldUpdateOperationsInput | number | null
    memory_max?: NullableJsonNullValueInput | InputJsonValue
    disk_bays?: NullableIntFieldUpdateOperationsInput | number | null
    disk_bays_max?: NullableIntFieldUpdateOperationsInput | number | null
    disk_types_supported?: NullableJsonNullValueInput | InputJsonValue
    m2_slot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    disk_host_swappable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lan_rj45_1G?: NullableIntFieldUpdateOperationsInput | number | null
    lan_rj45_2_5G?: NullableIntFieldUpdateOperationsInput | number | null
    lan_rj45_10G?: NullableIntFieldUpdateOperationsInput | number | null
    management_prot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    max_lax_ports?: NullableIntFieldUpdateOperationsInput | number | null
    usb_3_2_prots?: NullableIntFieldUpdateOperationsInput | number | null
    expansion_ports?: NullableIntFieldUpdateOperationsInput | number | null
    expansion_port_types?: NullableStringFieldUpdateOperationsInput | string | null
    pcie_expansion?: NullableStringFieldUpdateOperationsInput | string | null
    chassis_type?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    rack_mount_kit?: NullableStringFieldUpdateOperationsInput | string | null
    fan_size?: NullableStringFieldUpdateOperationsInput | string | null
    fan_replaceable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    led_brightness_adj?: NullableBoolFieldUpdateOperationsInput | boolean | null
    auto_power_recovery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    noise_lenel?: NullableStringFieldUpdateOperationsInput | string | null
    scheduled_power?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wake_on_lan?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dual_power_supply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ac_input_voltage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    power_consumption?: NullableStringFieldUpdateOperationsInput | string | null
    working_temperature?: NullableStringFieldUpdateOperationsInput | string | null
    storage_temperature?: NullableStringFieldUpdateOperationsInput | string | null
    relative_humidity?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: NullableJsonNullValueInput | InputJsonValue
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
    environmental_compliance?: NullableStringFieldUpdateOperationsInput | string | null
    package_contents?: NullableJsonNullValueInput | InputJsonValue
    optional_accessories?: NullableJsonNullValueInput | InputJsonValue
    cpu_threads?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tag_categoriesCreateInput = {
    id?: string
    name: string
    sort?: number | null
    categories_type?: string | null
    tags?: tagsCreateNestedManyWithoutTag_categoriesInput
  }

  export type tag_categoriesUncheckedCreateInput = {
    id?: string
    name: string
    sort?: number | null
    categories_type?: string | null
    tags?: tagsUncheckedCreateNestedManyWithoutTag_categoriesInput
  }

  export type tag_categoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    categories_type?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: tagsUpdateManyWithoutTag_categoriesNestedInput
  }

  export type tag_categoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    categories_type?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: tagsUncheckedUpdateManyWithoutTag_categoriesNestedInput
  }

  export type tag_categoriesCreateManyInput = {
    id?: string
    name: string
    sort?: number | null
    categories_type?: string | null
  }

  export type tag_categoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    categories_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tag_categoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    categories_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tagsCreateInput = {
    id?: string
    product_spec?: string | null
    product_size?: string | null
    sort_type?: number | null
    sort_order?: number | null
    spec_size?: string | null
    product_tags?: product_tagsCreateNestedManyWithoutTagsInput
    tag_categories?: tag_categoriesCreateNestedOneWithoutTagsInput
  }

  export type tagsUncheckedCreateInput = {
    id?: string
    created_id?: string
    product_spec?: string | null
    product_size?: string | null
    sort_type?: number | null
    sort_order?: number | null
    spec_size?: string | null
    product_tags?: product_tagsUncheckedCreateNestedManyWithoutTagsInput
  }

  export type tagsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_spec?: NullableStringFieldUpdateOperationsInput | string | null
    product_size?: NullableStringFieldUpdateOperationsInput | string | null
    sort_type?: NullableIntFieldUpdateOperationsInput | number | null
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    spec_size?: NullableStringFieldUpdateOperationsInput | string | null
    product_tags?: product_tagsUpdateManyWithoutTagsNestedInput
    tag_categories?: tag_categoriesUpdateOneRequiredWithoutTagsNestedInput
  }

  export type tagsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_id?: StringFieldUpdateOperationsInput | string
    product_spec?: NullableStringFieldUpdateOperationsInput | string | null
    product_size?: NullableStringFieldUpdateOperationsInput | string | null
    sort_type?: NullableIntFieldUpdateOperationsInput | number | null
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    spec_size?: NullableStringFieldUpdateOperationsInput | string | null
    product_tags?: product_tagsUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type tagsCreateManyInput = {
    id?: string
    created_id?: string
    product_spec?: string | null
    product_size?: string | null
    sort_type?: number | null
    sort_order?: number | null
    spec_size?: string | null
  }

  export type tagsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_spec?: NullableStringFieldUpdateOperationsInput | string | null
    product_size?: NullableStringFieldUpdateOperationsInput | string | null
    sort_type?: NullableIntFieldUpdateOperationsInput | number | null
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    spec_size?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tagsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_id?: StringFieldUpdateOperationsInput | string
    product_spec?: NullableStringFieldUpdateOperationsInput | string | null
    product_size?: NullableStringFieldUpdateOperationsInput | string | null
    sort_type?: NullableIntFieldUpdateOperationsInput | number | null
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    spec_size?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterCreateInput = {
    id?: string
    icpNumber?: string | null
    icpLink?: string | null
    copyright?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    links?: FooterLinkCreateNestedManyWithoutFooterInput
  }

  export type FooterUncheckedCreateInput = {
    id?: string
    icpNumber?: string | null
    icpLink?: string | null
    copyright?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    links?: FooterLinkUncheckedCreateNestedManyWithoutFooterInput
  }

  export type FooterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    icpNumber?: NullableStringFieldUpdateOperationsInput | string | null
    icpLink?: NullableStringFieldUpdateOperationsInput | string | null
    copyright?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: FooterLinkUpdateManyWithoutFooterNestedInput
  }

  export type FooterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    icpNumber?: NullableStringFieldUpdateOperationsInput | string | null
    icpLink?: NullableStringFieldUpdateOperationsInput | string | null
    copyright?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: FooterLinkUncheckedUpdateManyWithoutFooterNestedInput
  }

  export type FooterCreateManyInput = {
    id?: string
    icpNumber?: string | null
    icpLink?: string | null
    copyright?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FooterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    icpNumber?: NullableStringFieldUpdateOperationsInput | string | null
    icpLink?: NullableStringFieldUpdateOperationsInput | string | null
    copyright?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    icpNumber?: NullableStringFieldUpdateOperationsInput | string | null
    icpLink?: NullableStringFieldUpdateOperationsInput | string | null
    copyright?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterLinkCreateInput = {
    id?: string
    title: string
    url: string
    category: string
    icon?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    footer: FooterCreateNestedOneWithoutLinksInput
  }

  export type FooterLinkUncheckedCreateInput = {
    id?: string
    title: string
    url: string
    category: string
    icon?: string | null
    sortOrder?: number
    isActive?: boolean
    footerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FooterLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    footer?: FooterUpdateOneRequiredWithoutLinksNestedInput
  }

  export type FooterLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    footerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterLinkCreateManyInput = {
    id?: string
    title: string
    url: string
    category: string
    icon?: string | null
    sortOrder?: number
    isActive?: boolean
    footerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FooterLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    footerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Product_tagsListRelationFilter = {
    every?: product_tagsWhereInput
    some?: product_tagsWhereInput
    none?: product_tagsWhereInput
  }

  export type Products_hardwareListRelationFilter = {
    every?: products_hardwareWhereInput
    some?: products_hardwareWhereInput
    none?: products_hardwareWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type product_tagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type products_hardwareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cover_image?: SortOrder
    spec_pdf_url?: SortOrder
    is_active?: SortOrder
    description_i18n?: SortOrder
    software_space?: SortOrder
    hardware_space?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cover_image?: SortOrder
    spec_pdf_url?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cover_image?: SortOrder
    spec_pdf_url?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type TagsScalarRelationFilter = {
    is?: tagsWhereInput
    isNot?: tagsWhereInput
  }

  export type product_tagsProduct_idTag_idCompoundUniqueInput = {
    product_id: string
    tag_id: string
  }

  export type product_tagsCountOrderByAggregateInput = {
    product_id?: SortOrder
    tag_id?: SortOrder
    product_name?: SortOrder
    tag_spec?: SortOrder
    tag_size?: SortOrder
  }

  export type product_tagsMaxOrderByAggregateInput = {
    product_id?: SortOrder
    tag_id?: SortOrder
    product_name?: SortOrder
    tag_spec?: SortOrder
    tag_size?: SortOrder
  }

  export type product_tagsMinOrderByAggregateInput = {
    product_id?: SortOrder
    tag_id?: SortOrder
    product_name?: SortOrder
    tag_spec?: SortOrder
    tag_size?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type products_hardwareCountOrderByAggregateInput = {
    id?: SortOrder
    products_id?: SortOrder
    controller_count?: SortOrder
    cpu_model?: SortOrder
    cpu_count?: SortOrder
    cpu_cores?: SortOrder
    cpu_architecture?: SortOrder
    cpu_base_clock?: SortOrder
    cpu_turbo_clock?: SortOrder
    hardware_encryption?: SortOrder
    memory_total?: SortOrder
    memory_installed?: SortOrder
    memory_slots?: SortOrder
    memory_max?: SortOrder
    disk_bays?: SortOrder
    disk_bays_max?: SortOrder
    disk_types_supported?: SortOrder
    m2_slot?: SortOrder
    disk_host_swappable?: SortOrder
    lan_rj45_1G?: SortOrder
    lan_rj45_2_5G?: SortOrder
    lan_rj45_10G?: SortOrder
    management_prot?: SortOrder
    max_lax_ports?: SortOrder
    usb_3_2_prots?: SortOrder
    expansion_ports?: SortOrder
    expansion_port_types?: SortOrder
    pcie_expansion?: SortOrder
    chassis_type?: SortOrder
    dimensions?: SortOrder
    rack_mount_kit?: SortOrder
    fan_size?: SortOrder
    fan_replaceable?: SortOrder
    led_brightness_adj?: SortOrder
    auto_power_recovery?: SortOrder
    noise_lenel?: SortOrder
    scheduled_power?: SortOrder
    wake_on_lan?: SortOrder
    dual_power_supply?: SortOrder
    ac_input_voltage?: SortOrder
    frequency?: SortOrder
    power_consumption?: SortOrder
    working_temperature?: SortOrder
    storage_temperature?: SortOrder
    relative_humidity?: SortOrder
    certifications?: SortOrder
    warranty?: SortOrder
    environmental_compliance?: SortOrder
    package_contents?: SortOrder
    optional_accessories?: SortOrder
    cpu_threads?: SortOrder
  }

  export type products_hardwareAvgOrderByAggregateInput = {
    controller_count?: SortOrder
    cpu_count?: SortOrder
    cpu_cores?: SortOrder
    cpu_base_clock?: SortOrder
    cpu_turbo_clock?: SortOrder
    memory_slots?: SortOrder
    disk_bays?: SortOrder
    disk_bays_max?: SortOrder
    lan_rj45_1G?: SortOrder
    lan_rj45_2_5G?: SortOrder
    lan_rj45_10G?: SortOrder
    max_lax_ports?: SortOrder
    usb_3_2_prots?: SortOrder
    expansion_ports?: SortOrder
    cpu_threads?: SortOrder
  }

  export type products_hardwareMaxOrderByAggregateInput = {
    id?: SortOrder
    products_id?: SortOrder
    controller_count?: SortOrder
    cpu_model?: SortOrder
    cpu_count?: SortOrder
    cpu_cores?: SortOrder
    cpu_architecture?: SortOrder
    cpu_base_clock?: SortOrder
    cpu_turbo_clock?: SortOrder
    hardware_encryption?: SortOrder
    memory_total?: SortOrder
    memory_installed?: SortOrder
    memory_slots?: SortOrder
    disk_bays?: SortOrder
    disk_bays_max?: SortOrder
    m2_slot?: SortOrder
    disk_host_swappable?: SortOrder
    lan_rj45_1G?: SortOrder
    lan_rj45_2_5G?: SortOrder
    lan_rj45_10G?: SortOrder
    management_prot?: SortOrder
    max_lax_ports?: SortOrder
    usb_3_2_prots?: SortOrder
    expansion_ports?: SortOrder
    expansion_port_types?: SortOrder
    pcie_expansion?: SortOrder
    chassis_type?: SortOrder
    dimensions?: SortOrder
    rack_mount_kit?: SortOrder
    fan_size?: SortOrder
    fan_replaceable?: SortOrder
    led_brightness_adj?: SortOrder
    auto_power_recovery?: SortOrder
    noise_lenel?: SortOrder
    scheduled_power?: SortOrder
    wake_on_lan?: SortOrder
    dual_power_supply?: SortOrder
    ac_input_voltage?: SortOrder
    frequency?: SortOrder
    power_consumption?: SortOrder
    working_temperature?: SortOrder
    storage_temperature?: SortOrder
    relative_humidity?: SortOrder
    warranty?: SortOrder
    environmental_compliance?: SortOrder
    cpu_threads?: SortOrder
  }

  export type products_hardwareMinOrderByAggregateInput = {
    id?: SortOrder
    products_id?: SortOrder
    controller_count?: SortOrder
    cpu_model?: SortOrder
    cpu_count?: SortOrder
    cpu_cores?: SortOrder
    cpu_architecture?: SortOrder
    cpu_base_clock?: SortOrder
    cpu_turbo_clock?: SortOrder
    hardware_encryption?: SortOrder
    memory_total?: SortOrder
    memory_installed?: SortOrder
    memory_slots?: SortOrder
    disk_bays?: SortOrder
    disk_bays_max?: SortOrder
    m2_slot?: SortOrder
    disk_host_swappable?: SortOrder
    lan_rj45_1G?: SortOrder
    lan_rj45_2_5G?: SortOrder
    lan_rj45_10G?: SortOrder
    management_prot?: SortOrder
    max_lax_ports?: SortOrder
    usb_3_2_prots?: SortOrder
    expansion_ports?: SortOrder
    expansion_port_types?: SortOrder
    pcie_expansion?: SortOrder
    chassis_type?: SortOrder
    dimensions?: SortOrder
    rack_mount_kit?: SortOrder
    fan_size?: SortOrder
    fan_replaceable?: SortOrder
    led_brightness_adj?: SortOrder
    auto_power_recovery?: SortOrder
    noise_lenel?: SortOrder
    scheduled_power?: SortOrder
    wake_on_lan?: SortOrder
    dual_power_supply?: SortOrder
    ac_input_voltage?: SortOrder
    frequency?: SortOrder
    power_consumption?: SortOrder
    working_temperature?: SortOrder
    storage_temperature?: SortOrder
    relative_humidity?: SortOrder
    warranty?: SortOrder
    environmental_compliance?: SortOrder
    cpu_threads?: SortOrder
  }

  export type products_hardwareSumOrderByAggregateInput = {
    controller_count?: SortOrder
    cpu_count?: SortOrder
    cpu_cores?: SortOrder
    cpu_base_clock?: SortOrder
    cpu_turbo_clock?: SortOrder
    memory_slots?: SortOrder
    disk_bays?: SortOrder
    disk_bays_max?: SortOrder
    lan_rj45_1G?: SortOrder
    lan_rj45_2_5G?: SortOrder
    lan_rj45_10G?: SortOrder
    max_lax_ports?: SortOrder
    usb_3_2_prots?: SortOrder
    expansion_ports?: SortOrder
    cpu_threads?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type TagsListRelationFilter = {
    every?: tagsWhereInput
    some?: tagsWhereInput
    none?: tagsWhereInput
  }

  export type tagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tag_categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sort?: SortOrder
    categories_type?: SortOrder
  }

  export type tag_categoriesAvgOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type tag_categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sort?: SortOrder
    categories_type?: SortOrder
  }

  export type tag_categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sort?: SortOrder
    categories_type?: SortOrder
  }

  export type tag_categoriesSumOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type Tag_categoriesScalarRelationFilter = {
    is?: tag_categoriesWhereInput
    isNot?: tag_categoriesWhereInput
  }

  export type tagsCountOrderByAggregateInput = {
    id?: SortOrder
    created_id?: SortOrder
    product_spec?: SortOrder
    product_size?: SortOrder
    sort_type?: SortOrder
    sort_order?: SortOrder
    spec_size?: SortOrder
  }

  export type tagsAvgOrderByAggregateInput = {
    sort_type?: SortOrder
    sort_order?: SortOrder
  }

  export type tagsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_id?: SortOrder
    product_spec?: SortOrder
    product_size?: SortOrder
    sort_type?: SortOrder
    sort_order?: SortOrder
    spec_size?: SortOrder
  }

  export type tagsMinOrderByAggregateInput = {
    id?: SortOrder
    created_id?: SortOrder
    product_spec?: SortOrder
    product_size?: SortOrder
    sort_type?: SortOrder
    sort_order?: SortOrder
    spec_size?: SortOrder
  }

  export type tagsSumOrderByAggregateInput = {
    sort_type?: SortOrder
    sort_order?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FooterLinkListRelationFilter = {
    every?: FooterLinkWhereInput
    some?: FooterLinkWhereInput
    none?: FooterLinkWhereInput
  }

  export type FooterLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FooterCountOrderByAggregateInput = {
    id?: SortOrder
    icpNumber?: SortOrder
    icpLink?: SortOrder
    copyright?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterMaxOrderByAggregateInput = {
    id?: SortOrder
    icpNumber?: SortOrder
    icpLink?: SortOrder
    copyright?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterMinOrderByAggregateInput = {
    id?: SortOrder
    icpNumber?: SortOrder
    icpLink?: SortOrder
    copyright?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FooterScalarRelationFilter = {
    is?: FooterWhereInput
    isNot?: FooterWhereInput
  }

  export type FooterLinkCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    category?: SortOrder
    icon?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    footerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterLinkAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type FooterLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    category?: SortOrder
    icon?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    footerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterLinkMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    category?: SortOrder
    icon?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    footerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterLinkSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type product_tagsCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_tagsCreateWithoutProductsInput, product_tagsUncheckedCreateWithoutProductsInput> | product_tagsCreateWithoutProductsInput[] | product_tagsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_tagsCreateOrConnectWithoutProductsInput | product_tagsCreateOrConnectWithoutProductsInput[]
    createMany?: product_tagsCreateManyProductsInputEnvelope
    connect?: product_tagsWhereUniqueInput | product_tagsWhereUniqueInput[]
  }

  export type products_hardwareCreateNestedManyWithoutProductsInput = {
    create?: XOR<products_hardwareCreateWithoutProductsInput, products_hardwareUncheckedCreateWithoutProductsInput> | products_hardwareCreateWithoutProductsInput[] | products_hardwareUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: products_hardwareCreateOrConnectWithoutProductsInput | products_hardwareCreateOrConnectWithoutProductsInput[]
    createMany?: products_hardwareCreateManyProductsInputEnvelope
    connect?: products_hardwareWhereUniqueInput | products_hardwareWhereUniqueInput[]
  }

  export type product_tagsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_tagsCreateWithoutProductsInput, product_tagsUncheckedCreateWithoutProductsInput> | product_tagsCreateWithoutProductsInput[] | product_tagsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_tagsCreateOrConnectWithoutProductsInput | product_tagsCreateOrConnectWithoutProductsInput[]
    createMany?: product_tagsCreateManyProductsInputEnvelope
    connect?: product_tagsWhereUniqueInput | product_tagsWhereUniqueInput[]
  }

  export type products_hardwareUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<products_hardwareCreateWithoutProductsInput, products_hardwareUncheckedCreateWithoutProductsInput> | products_hardwareCreateWithoutProductsInput[] | products_hardwareUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: products_hardwareCreateOrConnectWithoutProductsInput | products_hardwareCreateOrConnectWithoutProductsInput[]
    createMany?: products_hardwareCreateManyProductsInputEnvelope
    connect?: products_hardwareWhereUniqueInput | products_hardwareWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type product_tagsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_tagsCreateWithoutProductsInput, product_tagsUncheckedCreateWithoutProductsInput> | product_tagsCreateWithoutProductsInput[] | product_tagsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_tagsCreateOrConnectWithoutProductsInput | product_tagsCreateOrConnectWithoutProductsInput[]
    upsert?: product_tagsUpsertWithWhereUniqueWithoutProductsInput | product_tagsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_tagsCreateManyProductsInputEnvelope
    set?: product_tagsWhereUniqueInput | product_tagsWhereUniqueInput[]
    disconnect?: product_tagsWhereUniqueInput | product_tagsWhereUniqueInput[]
    delete?: product_tagsWhereUniqueInput | product_tagsWhereUniqueInput[]
    connect?: product_tagsWhereUniqueInput | product_tagsWhereUniqueInput[]
    update?: product_tagsUpdateWithWhereUniqueWithoutProductsInput | product_tagsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_tagsUpdateManyWithWhereWithoutProductsInput | product_tagsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_tagsScalarWhereInput | product_tagsScalarWhereInput[]
  }

  export type products_hardwareUpdateManyWithoutProductsNestedInput = {
    create?: XOR<products_hardwareCreateWithoutProductsInput, products_hardwareUncheckedCreateWithoutProductsInput> | products_hardwareCreateWithoutProductsInput[] | products_hardwareUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: products_hardwareCreateOrConnectWithoutProductsInput | products_hardwareCreateOrConnectWithoutProductsInput[]
    upsert?: products_hardwareUpsertWithWhereUniqueWithoutProductsInput | products_hardwareUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: products_hardwareCreateManyProductsInputEnvelope
    set?: products_hardwareWhereUniqueInput | products_hardwareWhereUniqueInput[]
    disconnect?: products_hardwareWhereUniqueInput | products_hardwareWhereUniqueInput[]
    delete?: products_hardwareWhereUniqueInput | products_hardwareWhereUniqueInput[]
    connect?: products_hardwareWhereUniqueInput | products_hardwareWhereUniqueInput[]
    update?: products_hardwareUpdateWithWhereUniqueWithoutProductsInput | products_hardwareUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: products_hardwareUpdateManyWithWhereWithoutProductsInput | products_hardwareUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: products_hardwareScalarWhereInput | products_hardwareScalarWhereInput[]
  }

  export type product_tagsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_tagsCreateWithoutProductsInput, product_tagsUncheckedCreateWithoutProductsInput> | product_tagsCreateWithoutProductsInput[] | product_tagsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_tagsCreateOrConnectWithoutProductsInput | product_tagsCreateOrConnectWithoutProductsInput[]
    upsert?: product_tagsUpsertWithWhereUniqueWithoutProductsInput | product_tagsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_tagsCreateManyProductsInputEnvelope
    set?: product_tagsWhereUniqueInput | product_tagsWhereUniqueInput[]
    disconnect?: product_tagsWhereUniqueInput | product_tagsWhereUniqueInput[]
    delete?: product_tagsWhereUniqueInput | product_tagsWhereUniqueInput[]
    connect?: product_tagsWhereUniqueInput | product_tagsWhereUniqueInput[]
    update?: product_tagsUpdateWithWhereUniqueWithoutProductsInput | product_tagsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_tagsUpdateManyWithWhereWithoutProductsInput | product_tagsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_tagsScalarWhereInput | product_tagsScalarWhereInput[]
  }

  export type products_hardwareUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<products_hardwareCreateWithoutProductsInput, products_hardwareUncheckedCreateWithoutProductsInput> | products_hardwareCreateWithoutProductsInput[] | products_hardwareUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: products_hardwareCreateOrConnectWithoutProductsInput | products_hardwareCreateOrConnectWithoutProductsInput[]
    upsert?: products_hardwareUpsertWithWhereUniqueWithoutProductsInput | products_hardwareUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: products_hardwareCreateManyProductsInputEnvelope
    set?: products_hardwareWhereUniqueInput | products_hardwareWhereUniqueInput[]
    disconnect?: products_hardwareWhereUniqueInput | products_hardwareWhereUniqueInput[]
    delete?: products_hardwareWhereUniqueInput | products_hardwareWhereUniqueInput[]
    connect?: products_hardwareWhereUniqueInput | products_hardwareWhereUniqueInput[]
    update?: products_hardwareUpdateWithWhereUniqueWithoutProductsInput | products_hardwareUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: products_hardwareUpdateManyWithWhereWithoutProductsInput | products_hardwareUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: products_hardwareScalarWhereInput | products_hardwareScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProduct_tagsInput = {
    create?: XOR<ProductCreateWithoutProduct_tagsInput, ProductUncheckedCreateWithoutProduct_tagsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_tagsInput
    connect?: ProductWhereUniqueInput
  }

  export type tagsCreateNestedOneWithoutProduct_tagsInput = {
    create?: XOR<tagsCreateWithoutProduct_tagsInput, tagsUncheckedCreateWithoutProduct_tagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutProduct_tagsInput
    connect?: tagsWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutProduct_tagsNestedInput = {
    create?: XOR<ProductCreateWithoutProduct_tagsInput, ProductUncheckedCreateWithoutProduct_tagsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_tagsInput
    upsert?: ProductUpsertWithoutProduct_tagsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProduct_tagsInput, ProductUpdateWithoutProduct_tagsInput>, ProductUncheckedUpdateWithoutProduct_tagsInput>
  }

  export type tagsUpdateOneRequiredWithoutProduct_tagsNestedInput = {
    create?: XOR<tagsCreateWithoutProduct_tagsInput, tagsUncheckedCreateWithoutProduct_tagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutProduct_tagsInput
    upsert?: tagsUpsertWithoutProduct_tagsInput
    connect?: tagsWhereUniqueInput
    update?: XOR<XOR<tagsUpdateToOneWithWhereWithoutProduct_tagsInput, tagsUpdateWithoutProduct_tagsInput>, tagsUncheckedUpdateWithoutProduct_tagsInput>
  }

  export type ProductCreateNestedOneWithoutProducts_hardwareInput = {
    create?: XOR<ProductCreateWithoutProducts_hardwareInput, ProductUncheckedCreateWithoutProducts_hardwareInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProducts_hardwareInput
    connect?: ProductWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type ProductUpdateOneRequiredWithoutProducts_hardwareNestedInput = {
    create?: XOR<ProductCreateWithoutProducts_hardwareInput, ProductUncheckedCreateWithoutProducts_hardwareInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProducts_hardwareInput
    upsert?: ProductUpsertWithoutProducts_hardwareInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProducts_hardwareInput, ProductUpdateWithoutProducts_hardwareInput>, ProductUncheckedUpdateWithoutProducts_hardwareInput>
  }

  export type tagsCreateNestedManyWithoutTag_categoriesInput = {
    create?: XOR<tagsCreateWithoutTag_categoriesInput, tagsUncheckedCreateWithoutTag_categoriesInput> | tagsCreateWithoutTag_categoriesInput[] | tagsUncheckedCreateWithoutTag_categoriesInput[]
    connectOrCreate?: tagsCreateOrConnectWithoutTag_categoriesInput | tagsCreateOrConnectWithoutTag_categoriesInput[]
    createMany?: tagsCreateManyTag_categoriesInputEnvelope
    connect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
  }

  export type tagsUncheckedCreateNestedManyWithoutTag_categoriesInput = {
    create?: XOR<tagsCreateWithoutTag_categoriesInput, tagsUncheckedCreateWithoutTag_categoriesInput> | tagsCreateWithoutTag_categoriesInput[] | tagsUncheckedCreateWithoutTag_categoriesInput[]
    connectOrCreate?: tagsCreateOrConnectWithoutTag_categoriesInput | tagsCreateOrConnectWithoutTag_categoriesInput[]
    createMany?: tagsCreateManyTag_categoriesInputEnvelope
    connect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
  }

  export type tagsUpdateManyWithoutTag_categoriesNestedInput = {
    create?: XOR<tagsCreateWithoutTag_categoriesInput, tagsUncheckedCreateWithoutTag_categoriesInput> | tagsCreateWithoutTag_categoriesInput[] | tagsUncheckedCreateWithoutTag_categoriesInput[]
    connectOrCreate?: tagsCreateOrConnectWithoutTag_categoriesInput | tagsCreateOrConnectWithoutTag_categoriesInput[]
    upsert?: tagsUpsertWithWhereUniqueWithoutTag_categoriesInput | tagsUpsertWithWhereUniqueWithoutTag_categoriesInput[]
    createMany?: tagsCreateManyTag_categoriesInputEnvelope
    set?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    disconnect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    delete?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    connect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    update?: tagsUpdateWithWhereUniqueWithoutTag_categoriesInput | tagsUpdateWithWhereUniqueWithoutTag_categoriesInput[]
    updateMany?: tagsUpdateManyWithWhereWithoutTag_categoriesInput | tagsUpdateManyWithWhereWithoutTag_categoriesInput[]
    deleteMany?: tagsScalarWhereInput | tagsScalarWhereInput[]
  }

  export type tagsUncheckedUpdateManyWithoutTag_categoriesNestedInput = {
    create?: XOR<tagsCreateWithoutTag_categoriesInput, tagsUncheckedCreateWithoutTag_categoriesInput> | tagsCreateWithoutTag_categoriesInput[] | tagsUncheckedCreateWithoutTag_categoriesInput[]
    connectOrCreate?: tagsCreateOrConnectWithoutTag_categoriesInput | tagsCreateOrConnectWithoutTag_categoriesInput[]
    upsert?: tagsUpsertWithWhereUniqueWithoutTag_categoriesInput | tagsUpsertWithWhereUniqueWithoutTag_categoriesInput[]
    createMany?: tagsCreateManyTag_categoriesInputEnvelope
    set?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    disconnect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    delete?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    connect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    update?: tagsUpdateWithWhereUniqueWithoutTag_categoriesInput | tagsUpdateWithWhereUniqueWithoutTag_categoriesInput[]
    updateMany?: tagsUpdateManyWithWhereWithoutTag_categoriesInput | tagsUpdateManyWithWhereWithoutTag_categoriesInput[]
    deleteMany?: tagsScalarWhereInput | tagsScalarWhereInput[]
  }

  export type product_tagsCreateNestedManyWithoutTagsInput = {
    create?: XOR<product_tagsCreateWithoutTagsInput, product_tagsUncheckedCreateWithoutTagsInput> | product_tagsCreateWithoutTagsInput[] | product_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: product_tagsCreateOrConnectWithoutTagsInput | product_tagsCreateOrConnectWithoutTagsInput[]
    createMany?: product_tagsCreateManyTagsInputEnvelope
    connect?: product_tagsWhereUniqueInput | product_tagsWhereUniqueInput[]
  }

  export type tag_categoriesCreateNestedOneWithoutTagsInput = {
    create?: XOR<tag_categoriesCreateWithoutTagsInput, tag_categoriesUncheckedCreateWithoutTagsInput>
    connectOrCreate?: tag_categoriesCreateOrConnectWithoutTagsInput
    connect?: tag_categoriesWhereUniqueInput
  }

  export type product_tagsUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<product_tagsCreateWithoutTagsInput, product_tagsUncheckedCreateWithoutTagsInput> | product_tagsCreateWithoutTagsInput[] | product_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: product_tagsCreateOrConnectWithoutTagsInput | product_tagsCreateOrConnectWithoutTagsInput[]
    createMany?: product_tagsCreateManyTagsInputEnvelope
    connect?: product_tagsWhereUniqueInput | product_tagsWhereUniqueInput[]
  }

  export type product_tagsUpdateManyWithoutTagsNestedInput = {
    create?: XOR<product_tagsCreateWithoutTagsInput, product_tagsUncheckedCreateWithoutTagsInput> | product_tagsCreateWithoutTagsInput[] | product_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: product_tagsCreateOrConnectWithoutTagsInput | product_tagsCreateOrConnectWithoutTagsInput[]
    upsert?: product_tagsUpsertWithWhereUniqueWithoutTagsInput | product_tagsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: product_tagsCreateManyTagsInputEnvelope
    set?: product_tagsWhereUniqueInput | product_tagsWhereUniqueInput[]
    disconnect?: product_tagsWhereUniqueInput | product_tagsWhereUniqueInput[]
    delete?: product_tagsWhereUniqueInput | product_tagsWhereUniqueInput[]
    connect?: product_tagsWhereUniqueInput | product_tagsWhereUniqueInput[]
    update?: product_tagsUpdateWithWhereUniqueWithoutTagsInput | product_tagsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: product_tagsUpdateManyWithWhereWithoutTagsInput | product_tagsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: product_tagsScalarWhereInput | product_tagsScalarWhereInput[]
  }

  export type tag_categoriesUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<tag_categoriesCreateWithoutTagsInput, tag_categoriesUncheckedCreateWithoutTagsInput>
    connectOrCreate?: tag_categoriesCreateOrConnectWithoutTagsInput
    upsert?: tag_categoriesUpsertWithoutTagsInput
    connect?: tag_categoriesWhereUniqueInput
    update?: XOR<XOR<tag_categoriesUpdateToOneWithWhereWithoutTagsInput, tag_categoriesUpdateWithoutTagsInput>, tag_categoriesUncheckedUpdateWithoutTagsInput>
  }

  export type product_tagsUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<product_tagsCreateWithoutTagsInput, product_tagsUncheckedCreateWithoutTagsInput> | product_tagsCreateWithoutTagsInput[] | product_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: product_tagsCreateOrConnectWithoutTagsInput | product_tagsCreateOrConnectWithoutTagsInput[]
    upsert?: product_tagsUpsertWithWhereUniqueWithoutTagsInput | product_tagsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: product_tagsCreateManyTagsInputEnvelope
    set?: product_tagsWhereUniqueInput | product_tagsWhereUniqueInput[]
    disconnect?: product_tagsWhereUniqueInput | product_tagsWhereUniqueInput[]
    delete?: product_tagsWhereUniqueInput | product_tagsWhereUniqueInput[]
    connect?: product_tagsWhereUniqueInput | product_tagsWhereUniqueInput[]
    update?: product_tagsUpdateWithWhereUniqueWithoutTagsInput | product_tagsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: product_tagsUpdateManyWithWhereWithoutTagsInput | product_tagsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: product_tagsScalarWhereInput | product_tagsScalarWhereInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FooterLinkCreateNestedManyWithoutFooterInput = {
    create?: XOR<FooterLinkCreateWithoutFooterInput, FooterLinkUncheckedCreateWithoutFooterInput> | FooterLinkCreateWithoutFooterInput[] | FooterLinkUncheckedCreateWithoutFooterInput[]
    connectOrCreate?: FooterLinkCreateOrConnectWithoutFooterInput | FooterLinkCreateOrConnectWithoutFooterInput[]
    createMany?: FooterLinkCreateManyFooterInputEnvelope
    connect?: FooterLinkWhereUniqueInput | FooterLinkWhereUniqueInput[]
  }

  export type FooterLinkUncheckedCreateNestedManyWithoutFooterInput = {
    create?: XOR<FooterLinkCreateWithoutFooterInput, FooterLinkUncheckedCreateWithoutFooterInput> | FooterLinkCreateWithoutFooterInput[] | FooterLinkUncheckedCreateWithoutFooterInput[]
    connectOrCreate?: FooterLinkCreateOrConnectWithoutFooterInput | FooterLinkCreateOrConnectWithoutFooterInput[]
    createMany?: FooterLinkCreateManyFooterInputEnvelope
    connect?: FooterLinkWhereUniqueInput | FooterLinkWhereUniqueInput[]
  }

  export type FooterLinkUpdateManyWithoutFooterNestedInput = {
    create?: XOR<FooterLinkCreateWithoutFooterInput, FooterLinkUncheckedCreateWithoutFooterInput> | FooterLinkCreateWithoutFooterInput[] | FooterLinkUncheckedCreateWithoutFooterInput[]
    connectOrCreate?: FooterLinkCreateOrConnectWithoutFooterInput | FooterLinkCreateOrConnectWithoutFooterInput[]
    upsert?: FooterLinkUpsertWithWhereUniqueWithoutFooterInput | FooterLinkUpsertWithWhereUniqueWithoutFooterInput[]
    createMany?: FooterLinkCreateManyFooterInputEnvelope
    set?: FooterLinkWhereUniqueInput | FooterLinkWhereUniqueInput[]
    disconnect?: FooterLinkWhereUniqueInput | FooterLinkWhereUniqueInput[]
    delete?: FooterLinkWhereUniqueInput | FooterLinkWhereUniqueInput[]
    connect?: FooterLinkWhereUniqueInput | FooterLinkWhereUniqueInput[]
    update?: FooterLinkUpdateWithWhereUniqueWithoutFooterInput | FooterLinkUpdateWithWhereUniqueWithoutFooterInput[]
    updateMany?: FooterLinkUpdateManyWithWhereWithoutFooterInput | FooterLinkUpdateManyWithWhereWithoutFooterInput[]
    deleteMany?: FooterLinkScalarWhereInput | FooterLinkScalarWhereInput[]
  }

  export type FooterLinkUncheckedUpdateManyWithoutFooterNestedInput = {
    create?: XOR<FooterLinkCreateWithoutFooterInput, FooterLinkUncheckedCreateWithoutFooterInput> | FooterLinkCreateWithoutFooterInput[] | FooterLinkUncheckedCreateWithoutFooterInput[]
    connectOrCreate?: FooterLinkCreateOrConnectWithoutFooterInput | FooterLinkCreateOrConnectWithoutFooterInput[]
    upsert?: FooterLinkUpsertWithWhereUniqueWithoutFooterInput | FooterLinkUpsertWithWhereUniqueWithoutFooterInput[]
    createMany?: FooterLinkCreateManyFooterInputEnvelope
    set?: FooterLinkWhereUniqueInput | FooterLinkWhereUniqueInput[]
    disconnect?: FooterLinkWhereUniqueInput | FooterLinkWhereUniqueInput[]
    delete?: FooterLinkWhereUniqueInput | FooterLinkWhereUniqueInput[]
    connect?: FooterLinkWhereUniqueInput | FooterLinkWhereUniqueInput[]
    update?: FooterLinkUpdateWithWhereUniqueWithoutFooterInput | FooterLinkUpdateWithWhereUniqueWithoutFooterInput[]
    updateMany?: FooterLinkUpdateManyWithWhereWithoutFooterInput | FooterLinkUpdateManyWithWhereWithoutFooterInput[]
    deleteMany?: FooterLinkScalarWhereInput | FooterLinkScalarWhereInput[]
  }

  export type FooterCreateNestedOneWithoutLinksInput = {
    create?: XOR<FooterCreateWithoutLinksInput, FooterUncheckedCreateWithoutLinksInput>
    connectOrCreate?: FooterCreateOrConnectWithoutLinksInput
    connect?: FooterWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FooterUpdateOneRequiredWithoutLinksNestedInput = {
    create?: XOR<FooterCreateWithoutLinksInput, FooterUncheckedCreateWithoutLinksInput>
    connectOrCreate?: FooterCreateOrConnectWithoutLinksInput
    upsert?: FooterUpsertWithoutLinksInput
    connect?: FooterWhereUniqueInput
    update?: XOR<XOR<FooterUpdateToOneWithWhereWithoutLinksInput, FooterUpdateWithoutLinksInput>, FooterUncheckedUpdateWithoutLinksInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type product_tagsCreateWithoutProductsInput = {
    product_name?: string | null
    tag_spec?: string | null
    tag_size?: string | null
    tags?: tagsCreateNestedOneWithoutProduct_tagsInput
  }

  export type product_tagsUncheckedCreateWithoutProductsInput = {
    tag_id?: string
    product_name?: string | null
    tag_spec?: string | null
    tag_size?: string | null
  }

  export type product_tagsCreateOrConnectWithoutProductsInput = {
    where: product_tagsWhereUniqueInput
    create: XOR<product_tagsCreateWithoutProductsInput, product_tagsUncheckedCreateWithoutProductsInput>
  }

  export type product_tagsCreateManyProductsInputEnvelope = {
    data: product_tagsCreateManyProductsInput | product_tagsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type products_hardwareCreateWithoutProductsInput = {
    id?: string
    controller_count?: number | null
    cpu_model?: string | null
    cpu_count?: number | null
    cpu_cores?: number | null
    cpu_architecture?: string | null
    cpu_base_clock?: Decimal | DecimalJsLike | number | string | null
    cpu_turbo_clock?: Decimal | DecimalJsLike | number | string | null
    hardware_encryption?: string | null
    memory_total?: string | null
    memory_installed?: string | null
    memory_slots?: number | null
    memory_max?: NullableJsonNullValueInput | InputJsonValue
    disk_bays?: number | null
    disk_bays_max?: number | null
    disk_types_supported?: NullableJsonNullValueInput | InputJsonValue
    m2_slot?: boolean | null
    disk_host_swappable?: boolean | null
    lan_rj45_1G?: number | null
    lan_rj45_2_5G?: number | null
    lan_rj45_10G?: number | null
    management_prot?: boolean | null
    max_lax_ports?: number | null
    usb_3_2_prots?: number | null
    expansion_ports?: number | null
    expansion_port_types?: string | null
    pcie_expansion?: string | null
    chassis_type?: string | null
    dimensions?: string | null
    rack_mount_kit?: string | null
    fan_size?: string | null
    fan_replaceable?: boolean | null
    led_brightness_adj?: boolean | null
    auto_power_recovery?: boolean | null
    noise_lenel?: string | null
    scheduled_power?: boolean | null
    wake_on_lan?: boolean | null
    dual_power_supply?: boolean | null
    ac_input_voltage?: string | null
    frequency?: string | null
    power_consumption?: string | null
    working_temperature?: string | null
    storage_temperature?: string | null
    relative_humidity?: string | null
    certifications?: NullableJsonNullValueInput | InputJsonValue
    warranty?: string | null
    environmental_compliance?: string | null
    package_contents?: NullableJsonNullValueInput | InputJsonValue
    optional_accessories?: NullableJsonNullValueInput | InputJsonValue
    cpu_threads?: number | null
  }

  export type products_hardwareUncheckedCreateWithoutProductsInput = {
    id?: string
    controller_count?: number | null
    cpu_model?: string | null
    cpu_count?: number | null
    cpu_cores?: number | null
    cpu_architecture?: string | null
    cpu_base_clock?: Decimal | DecimalJsLike | number | string | null
    cpu_turbo_clock?: Decimal | DecimalJsLike | number | string | null
    hardware_encryption?: string | null
    memory_total?: string | null
    memory_installed?: string | null
    memory_slots?: number | null
    memory_max?: NullableJsonNullValueInput | InputJsonValue
    disk_bays?: number | null
    disk_bays_max?: number | null
    disk_types_supported?: NullableJsonNullValueInput | InputJsonValue
    m2_slot?: boolean | null
    disk_host_swappable?: boolean | null
    lan_rj45_1G?: number | null
    lan_rj45_2_5G?: number | null
    lan_rj45_10G?: number | null
    management_prot?: boolean | null
    max_lax_ports?: number | null
    usb_3_2_prots?: number | null
    expansion_ports?: number | null
    expansion_port_types?: string | null
    pcie_expansion?: string | null
    chassis_type?: string | null
    dimensions?: string | null
    rack_mount_kit?: string | null
    fan_size?: string | null
    fan_replaceable?: boolean | null
    led_brightness_adj?: boolean | null
    auto_power_recovery?: boolean | null
    noise_lenel?: string | null
    scheduled_power?: boolean | null
    wake_on_lan?: boolean | null
    dual_power_supply?: boolean | null
    ac_input_voltage?: string | null
    frequency?: string | null
    power_consumption?: string | null
    working_temperature?: string | null
    storage_temperature?: string | null
    relative_humidity?: string | null
    certifications?: NullableJsonNullValueInput | InputJsonValue
    warranty?: string | null
    environmental_compliance?: string | null
    package_contents?: NullableJsonNullValueInput | InputJsonValue
    optional_accessories?: NullableJsonNullValueInput | InputJsonValue
    cpu_threads?: number | null
  }

  export type products_hardwareCreateOrConnectWithoutProductsInput = {
    where: products_hardwareWhereUniqueInput
    create: XOR<products_hardwareCreateWithoutProductsInput, products_hardwareUncheckedCreateWithoutProductsInput>
  }

  export type products_hardwareCreateManyProductsInputEnvelope = {
    data: products_hardwareCreateManyProductsInput | products_hardwareCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type product_tagsUpsertWithWhereUniqueWithoutProductsInput = {
    where: product_tagsWhereUniqueInput
    update: XOR<product_tagsUpdateWithoutProductsInput, product_tagsUncheckedUpdateWithoutProductsInput>
    create: XOR<product_tagsCreateWithoutProductsInput, product_tagsUncheckedCreateWithoutProductsInput>
  }

  export type product_tagsUpdateWithWhereUniqueWithoutProductsInput = {
    where: product_tagsWhereUniqueInput
    data: XOR<product_tagsUpdateWithoutProductsInput, product_tagsUncheckedUpdateWithoutProductsInput>
  }

  export type product_tagsUpdateManyWithWhereWithoutProductsInput = {
    where: product_tagsScalarWhereInput
    data: XOR<product_tagsUpdateManyMutationInput, product_tagsUncheckedUpdateManyWithoutProductsInput>
  }

  export type product_tagsScalarWhereInput = {
    AND?: product_tagsScalarWhereInput | product_tagsScalarWhereInput[]
    OR?: product_tagsScalarWhereInput[]
    NOT?: product_tagsScalarWhereInput | product_tagsScalarWhereInput[]
    product_id?: UuidFilter<"product_tags"> | string
    tag_id?: UuidFilter<"product_tags"> | string
    product_name?: StringNullableFilter<"product_tags"> | string | null
    tag_spec?: StringNullableFilter<"product_tags"> | string | null
    tag_size?: StringNullableFilter<"product_tags"> | string | null
  }

  export type products_hardwareUpsertWithWhereUniqueWithoutProductsInput = {
    where: products_hardwareWhereUniqueInput
    update: XOR<products_hardwareUpdateWithoutProductsInput, products_hardwareUncheckedUpdateWithoutProductsInput>
    create: XOR<products_hardwareCreateWithoutProductsInput, products_hardwareUncheckedCreateWithoutProductsInput>
  }

  export type products_hardwareUpdateWithWhereUniqueWithoutProductsInput = {
    where: products_hardwareWhereUniqueInput
    data: XOR<products_hardwareUpdateWithoutProductsInput, products_hardwareUncheckedUpdateWithoutProductsInput>
  }

  export type products_hardwareUpdateManyWithWhereWithoutProductsInput = {
    where: products_hardwareScalarWhereInput
    data: XOR<products_hardwareUpdateManyMutationInput, products_hardwareUncheckedUpdateManyWithoutProductsInput>
  }

  export type products_hardwareScalarWhereInput = {
    AND?: products_hardwareScalarWhereInput | products_hardwareScalarWhereInput[]
    OR?: products_hardwareScalarWhereInput[]
    NOT?: products_hardwareScalarWhereInput | products_hardwareScalarWhereInput[]
    id?: UuidFilter<"products_hardware"> | string
    products_id?: UuidFilter<"products_hardware"> | string
    controller_count?: IntNullableFilter<"products_hardware"> | number | null
    cpu_model?: StringNullableFilter<"products_hardware"> | string | null
    cpu_count?: IntNullableFilter<"products_hardware"> | number | null
    cpu_cores?: IntNullableFilter<"products_hardware"> | number | null
    cpu_architecture?: StringNullableFilter<"products_hardware"> | string | null
    cpu_base_clock?: DecimalNullableFilter<"products_hardware"> | Decimal | DecimalJsLike | number | string | null
    cpu_turbo_clock?: DecimalNullableFilter<"products_hardware"> | Decimal | DecimalJsLike | number | string | null
    hardware_encryption?: StringNullableFilter<"products_hardware"> | string | null
    memory_total?: StringNullableFilter<"products_hardware"> | string | null
    memory_installed?: StringNullableFilter<"products_hardware"> | string | null
    memory_slots?: IntNullableFilter<"products_hardware"> | number | null
    memory_max?: JsonNullableFilter<"products_hardware">
    disk_bays?: IntNullableFilter<"products_hardware"> | number | null
    disk_bays_max?: IntNullableFilter<"products_hardware"> | number | null
    disk_types_supported?: JsonNullableFilter<"products_hardware">
    m2_slot?: BoolNullableFilter<"products_hardware"> | boolean | null
    disk_host_swappable?: BoolNullableFilter<"products_hardware"> | boolean | null
    lan_rj45_1G?: IntNullableFilter<"products_hardware"> | number | null
    lan_rj45_2_5G?: IntNullableFilter<"products_hardware"> | number | null
    lan_rj45_10G?: IntNullableFilter<"products_hardware"> | number | null
    management_prot?: BoolNullableFilter<"products_hardware"> | boolean | null
    max_lax_ports?: IntNullableFilter<"products_hardware"> | number | null
    usb_3_2_prots?: IntNullableFilter<"products_hardware"> | number | null
    expansion_ports?: IntNullableFilter<"products_hardware"> | number | null
    expansion_port_types?: StringNullableFilter<"products_hardware"> | string | null
    pcie_expansion?: StringNullableFilter<"products_hardware"> | string | null
    chassis_type?: StringNullableFilter<"products_hardware"> | string | null
    dimensions?: StringNullableFilter<"products_hardware"> | string | null
    rack_mount_kit?: StringNullableFilter<"products_hardware"> | string | null
    fan_size?: StringNullableFilter<"products_hardware"> | string | null
    fan_replaceable?: BoolNullableFilter<"products_hardware"> | boolean | null
    led_brightness_adj?: BoolNullableFilter<"products_hardware"> | boolean | null
    auto_power_recovery?: BoolNullableFilter<"products_hardware"> | boolean | null
    noise_lenel?: StringNullableFilter<"products_hardware"> | string | null
    scheduled_power?: BoolNullableFilter<"products_hardware"> | boolean | null
    wake_on_lan?: BoolNullableFilter<"products_hardware"> | boolean | null
    dual_power_supply?: BoolNullableFilter<"products_hardware"> | boolean | null
    ac_input_voltage?: StringNullableFilter<"products_hardware"> | string | null
    frequency?: StringNullableFilter<"products_hardware"> | string | null
    power_consumption?: StringNullableFilter<"products_hardware"> | string | null
    working_temperature?: StringNullableFilter<"products_hardware"> | string | null
    storage_temperature?: StringNullableFilter<"products_hardware"> | string | null
    relative_humidity?: StringNullableFilter<"products_hardware"> | string | null
    certifications?: JsonNullableFilter<"products_hardware">
    warranty?: StringNullableFilter<"products_hardware"> | string | null
    environmental_compliance?: StringNullableFilter<"products_hardware"> | string | null
    package_contents?: JsonNullableFilter<"products_hardware">
    optional_accessories?: JsonNullableFilter<"products_hardware">
    cpu_threads?: IntNullableFilter<"products_hardware"> | number | null
  }

  export type ProductCreateWithoutProduct_tagsInput = {
    id?: string
    name?: string
    description?: string | null
    cover_image?: string | null
    spec_pdf_url?: string | null
    is_active?: boolean
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    software_space?: NullableJsonNullValueInput | InputJsonValue
    hardware_space?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    products_hardware?: products_hardwareCreateNestedManyWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutProduct_tagsInput = {
    id?: string
    name?: string
    description?: string | null
    cover_image?: string | null
    spec_pdf_url?: string | null
    is_active?: boolean
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    software_space?: NullableJsonNullValueInput | InputJsonValue
    hardware_space?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    products_hardware?: products_hardwareUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductCreateOrConnectWithoutProduct_tagsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProduct_tagsInput, ProductUncheckedCreateWithoutProduct_tagsInput>
  }

  export type tagsCreateWithoutProduct_tagsInput = {
    id?: string
    product_spec?: string | null
    product_size?: string | null
    sort_type?: number | null
    sort_order?: number | null
    spec_size?: string | null
    tag_categories?: tag_categoriesCreateNestedOneWithoutTagsInput
  }

  export type tagsUncheckedCreateWithoutProduct_tagsInput = {
    id?: string
    created_id?: string
    product_spec?: string | null
    product_size?: string | null
    sort_type?: number | null
    sort_order?: number | null
    spec_size?: string | null
  }

  export type tagsCreateOrConnectWithoutProduct_tagsInput = {
    where: tagsWhereUniqueInput
    create: XOR<tagsCreateWithoutProduct_tagsInput, tagsUncheckedCreateWithoutProduct_tagsInput>
  }

  export type ProductUpsertWithoutProduct_tagsInput = {
    update: XOR<ProductUpdateWithoutProduct_tagsInput, ProductUncheckedUpdateWithoutProduct_tagsInput>
    create: XOR<ProductCreateWithoutProduct_tagsInput, ProductUncheckedCreateWithoutProduct_tagsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProduct_tagsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProduct_tagsInput, ProductUncheckedUpdateWithoutProduct_tagsInput>
  }

  export type ProductUpdateWithoutProduct_tagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    spec_pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    software_space?: NullableJsonNullValueInput | InputJsonValue
    hardware_space?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products_hardware?: products_hardwareUpdateManyWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutProduct_tagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    spec_pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    software_space?: NullableJsonNullValueInput | InputJsonValue
    hardware_space?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products_hardware?: products_hardwareUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type tagsUpsertWithoutProduct_tagsInput = {
    update: XOR<tagsUpdateWithoutProduct_tagsInput, tagsUncheckedUpdateWithoutProduct_tagsInput>
    create: XOR<tagsCreateWithoutProduct_tagsInput, tagsUncheckedCreateWithoutProduct_tagsInput>
    where?: tagsWhereInput
  }

  export type tagsUpdateToOneWithWhereWithoutProduct_tagsInput = {
    where?: tagsWhereInput
    data: XOR<tagsUpdateWithoutProduct_tagsInput, tagsUncheckedUpdateWithoutProduct_tagsInput>
  }

  export type tagsUpdateWithoutProduct_tagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_spec?: NullableStringFieldUpdateOperationsInput | string | null
    product_size?: NullableStringFieldUpdateOperationsInput | string | null
    sort_type?: NullableIntFieldUpdateOperationsInput | number | null
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    spec_size?: NullableStringFieldUpdateOperationsInput | string | null
    tag_categories?: tag_categoriesUpdateOneRequiredWithoutTagsNestedInput
  }

  export type tagsUncheckedUpdateWithoutProduct_tagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_id?: StringFieldUpdateOperationsInput | string
    product_spec?: NullableStringFieldUpdateOperationsInput | string | null
    product_size?: NullableStringFieldUpdateOperationsInput | string | null
    sort_type?: NullableIntFieldUpdateOperationsInput | number | null
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    spec_size?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductCreateWithoutProducts_hardwareInput = {
    id?: string
    name?: string
    description?: string | null
    cover_image?: string | null
    spec_pdf_url?: string | null
    is_active?: boolean
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    software_space?: NullableJsonNullValueInput | InputJsonValue
    hardware_space?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    product_tags?: product_tagsCreateNestedManyWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutProducts_hardwareInput = {
    id?: string
    name?: string
    description?: string | null
    cover_image?: string | null
    spec_pdf_url?: string | null
    is_active?: boolean
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    software_space?: NullableJsonNullValueInput | InputJsonValue
    hardware_space?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    product_tags?: product_tagsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductCreateOrConnectWithoutProducts_hardwareInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProducts_hardwareInput, ProductUncheckedCreateWithoutProducts_hardwareInput>
  }

  export type ProductUpsertWithoutProducts_hardwareInput = {
    update: XOR<ProductUpdateWithoutProducts_hardwareInput, ProductUncheckedUpdateWithoutProducts_hardwareInput>
    create: XOR<ProductCreateWithoutProducts_hardwareInput, ProductUncheckedCreateWithoutProducts_hardwareInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProducts_hardwareInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProducts_hardwareInput, ProductUncheckedUpdateWithoutProducts_hardwareInput>
  }

  export type ProductUpdateWithoutProducts_hardwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    spec_pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    software_space?: NullableJsonNullValueInput | InputJsonValue
    hardware_space?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_tags?: product_tagsUpdateManyWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutProducts_hardwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    spec_pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    software_space?: NullableJsonNullValueInput | InputJsonValue
    hardware_space?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_tags?: product_tagsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type tagsCreateWithoutTag_categoriesInput = {
    id?: string
    product_spec?: string | null
    product_size?: string | null
    sort_type?: number | null
    sort_order?: number | null
    spec_size?: string | null
    product_tags?: product_tagsCreateNestedManyWithoutTagsInput
  }

  export type tagsUncheckedCreateWithoutTag_categoriesInput = {
    id?: string
    product_spec?: string | null
    product_size?: string | null
    sort_type?: number | null
    sort_order?: number | null
    spec_size?: string | null
    product_tags?: product_tagsUncheckedCreateNestedManyWithoutTagsInput
  }

  export type tagsCreateOrConnectWithoutTag_categoriesInput = {
    where: tagsWhereUniqueInput
    create: XOR<tagsCreateWithoutTag_categoriesInput, tagsUncheckedCreateWithoutTag_categoriesInput>
  }

  export type tagsCreateManyTag_categoriesInputEnvelope = {
    data: tagsCreateManyTag_categoriesInput | tagsCreateManyTag_categoriesInput[]
    skipDuplicates?: boolean
  }

  export type tagsUpsertWithWhereUniqueWithoutTag_categoriesInput = {
    where: tagsWhereUniqueInput
    update: XOR<tagsUpdateWithoutTag_categoriesInput, tagsUncheckedUpdateWithoutTag_categoriesInput>
    create: XOR<tagsCreateWithoutTag_categoriesInput, tagsUncheckedCreateWithoutTag_categoriesInput>
  }

  export type tagsUpdateWithWhereUniqueWithoutTag_categoriesInput = {
    where: tagsWhereUniqueInput
    data: XOR<tagsUpdateWithoutTag_categoriesInput, tagsUncheckedUpdateWithoutTag_categoriesInput>
  }

  export type tagsUpdateManyWithWhereWithoutTag_categoriesInput = {
    where: tagsScalarWhereInput
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyWithoutTag_categoriesInput>
  }

  export type tagsScalarWhereInput = {
    AND?: tagsScalarWhereInput | tagsScalarWhereInput[]
    OR?: tagsScalarWhereInput[]
    NOT?: tagsScalarWhereInput | tagsScalarWhereInput[]
    id?: UuidFilter<"tags"> | string
    created_id?: UuidFilter<"tags"> | string
    product_spec?: StringNullableFilter<"tags"> | string | null
    product_size?: StringNullableFilter<"tags"> | string | null
    sort_type?: IntNullableFilter<"tags"> | number | null
    sort_order?: IntNullableFilter<"tags"> | number | null
    spec_size?: StringNullableFilter<"tags"> | string | null
  }

  export type product_tagsCreateWithoutTagsInput = {
    product_name?: string | null
    tag_spec?: string | null
    tag_size?: string | null
    products?: ProductCreateNestedOneWithoutProduct_tagsInput
  }

  export type product_tagsUncheckedCreateWithoutTagsInput = {
    product_id?: string
    product_name?: string | null
    tag_spec?: string | null
    tag_size?: string | null
  }

  export type product_tagsCreateOrConnectWithoutTagsInput = {
    where: product_tagsWhereUniqueInput
    create: XOR<product_tagsCreateWithoutTagsInput, product_tagsUncheckedCreateWithoutTagsInput>
  }

  export type product_tagsCreateManyTagsInputEnvelope = {
    data: product_tagsCreateManyTagsInput | product_tagsCreateManyTagsInput[]
    skipDuplicates?: boolean
  }

  export type tag_categoriesCreateWithoutTagsInput = {
    id?: string
    name: string
    sort?: number | null
    categories_type?: string | null
  }

  export type tag_categoriesUncheckedCreateWithoutTagsInput = {
    id?: string
    name: string
    sort?: number | null
    categories_type?: string | null
  }

  export type tag_categoriesCreateOrConnectWithoutTagsInput = {
    where: tag_categoriesWhereUniqueInput
    create: XOR<tag_categoriesCreateWithoutTagsInput, tag_categoriesUncheckedCreateWithoutTagsInput>
  }

  export type product_tagsUpsertWithWhereUniqueWithoutTagsInput = {
    where: product_tagsWhereUniqueInput
    update: XOR<product_tagsUpdateWithoutTagsInput, product_tagsUncheckedUpdateWithoutTagsInput>
    create: XOR<product_tagsCreateWithoutTagsInput, product_tagsUncheckedCreateWithoutTagsInput>
  }

  export type product_tagsUpdateWithWhereUniqueWithoutTagsInput = {
    where: product_tagsWhereUniqueInput
    data: XOR<product_tagsUpdateWithoutTagsInput, product_tagsUncheckedUpdateWithoutTagsInput>
  }

  export type product_tagsUpdateManyWithWhereWithoutTagsInput = {
    where: product_tagsScalarWhereInput
    data: XOR<product_tagsUpdateManyMutationInput, product_tagsUncheckedUpdateManyWithoutTagsInput>
  }

  export type tag_categoriesUpsertWithoutTagsInput = {
    update: XOR<tag_categoriesUpdateWithoutTagsInput, tag_categoriesUncheckedUpdateWithoutTagsInput>
    create: XOR<tag_categoriesCreateWithoutTagsInput, tag_categoriesUncheckedCreateWithoutTagsInput>
    where?: tag_categoriesWhereInput
  }

  export type tag_categoriesUpdateToOneWithWhereWithoutTagsInput = {
    where?: tag_categoriesWhereInput
    data: XOR<tag_categoriesUpdateWithoutTagsInput, tag_categoriesUncheckedUpdateWithoutTagsInput>
  }

  export type tag_categoriesUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    categories_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tag_categoriesUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    categories_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FooterLinkCreateWithoutFooterInput = {
    id?: string
    title: string
    url: string
    category: string
    icon?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FooterLinkUncheckedCreateWithoutFooterInput = {
    id?: string
    title: string
    url: string
    category: string
    icon?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FooterLinkCreateOrConnectWithoutFooterInput = {
    where: FooterLinkWhereUniqueInput
    create: XOR<FooterLinkCreateWithoutFooterInput, FooterLinkUncheckedCreateWithoutFooterInput>
  }

  export type FooterLinkCreateManyFooterInputEnvelope = {
    data: FooterLinkCreateManyFooterInput | FooterLinkCreateManyFooterInput[]
    skipDuplicates?: boolean
  }

  export type FooterLinkUpsertWithWhereUniqueWithoutFooterInput = {
    where: FooterLinkWhereUniqueInput
    update: XOR<FooterLinkUpdateWithoutFooterInput, FooterLinkUncheckedUpdateWithoutFooterInput>
    create: XOR<FooterLinkCreateWithoutFooterInput, FooterLinkUncheckedCreateWithoutFooterInput>
  }

  export type FooterLinkUpdateWithWhereUniqueWithoutFooterInput = {
    where: FooterLinkWhereUniqueInput
    data: XOR<FooterLinkUpdateWithoutFooterInput, FooterLinkUncheckedUpdateWithoutFooterInput>
  }

  export type FooterLinkUpdateManyWithWhereWithoutFooterInput = {
    where: FooterLinkScalarWhereInput
    data: XOR<FooterLinkUpdateManyMutationInput, FooterLinkUncheckedUpdateManyWithoutFooterInput>
  }

  export type FooterLinkScalarWhereInput = {
    AND?: FooterLinkScalarWhereInput | FooterLinkScalarWhereInput[]
    OR?: FooterLinkScalarWhereInput[]
    NOT?: FooterLinkScalarWhereInput | FooterLinkScalarWhereInput[]
    id?: UuidFilter<"FooterLink"> | string
    title?: StringFilter<"FooterLink"> | string
    url?: StringFilter<"FooterLink"> | string
    category?: StringFilter<"FooterLink"> | string
    icon?: StringNullableFilter<"FooterLink"> | string | null
    sortOrder?: IntFilter<"FooterLink"> | number
    isActive?: BoolFilter<"FooterLink"> | boolean
    footerId?: UuidFilter<"FooterLink"> | string
    createdAt?: DateTimeFilter<"FooterLink"> | Date | string
    updatedAt?: DateTimeFilter<"FooterLink"> | Date | string
  }

  export type FooterCreateWithoutLinksInput = {
    id?: string
    icpNumber?: string | null
    icpLink?: string | null
    copyright?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FooterUncheckedCreateWithoutLinksInput = {
    id?: string
    icpNumber?: string | null
    icpLink?: string | null
    copyright?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FooterCreateOrConnectWithoutLinksInput = {
    where: FooterWhereUniqueInput
    create: XOR<FooterCreateWithoutLinksInput, FooterUncheckedCreateWithoutLinksInput>
  }

  export type FooterUpsertWithoutLinksInput = {
    update: XOR<FooterUpdateWithoutLinksInput, FooterUncheckedUpdateWithoutLinksInput>
    create: XOR<FooterCreateWithoutLinksInput, FooterUncheckedCreateWithoutLinksInput>
    where?: FooterWhereInput
  }

  export type FooterUpdateToOneWithWhereWithoutLinksInput = {
    where?: FooterWhereInput
    data: XOR<FooterUpdateWithoutLinksInput, FooterUncheckedUpdateWithoutLinksInput>
  }

  export type FooterUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    icpNumber?: NullableStringFieldUpdateOperationsInput | string | null
    icpLink?: NullableStringFieldUpdateOperationsInput | string | null
    copyright?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterUncheckedUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    icpNumber?: NullableStringFieldUpdateOperationsInput | string | null
    icpLink?: NullableStringFieldUpdateOperationsInput | string | null
    copyright?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_tagsCreateManyProductsInput = {
    tag_id?: string
    product_name?: string | null
    tag_spec?: string | null
    tag_size?: string | null
  }

  export type products_hardwareCreateManyProductsInput = {
    id?: string
    controller_count?: number | null
    cpu_model?: string | null
    cpu_count?: number | null
    cpu_cores?: number | null
    cpu_architecture?: string | null
    cpu_base_clock?: Decimal | DecimalJsLike | number | string | null
    cpu_turbo_clock?: Decimal | DecimalJsLike | number | string | null
    hardware_encryption?: string | null
    memory_total?: string | null
    memory_installed?: string | null
    memory_slots?: number | null
    memory_max?: NullableJsonNullValueInput | InputJsonValue
    disk_bays?: number | null
    disk_bays_max?: number | null
    disk_types_supported?: NullableJsonNullValueInput | InputJsonValue
    m2_slot?: boolean | null
    disk_host_swappable?: boolean | null
    lan_rj45_1G?: number | null
    lan_rj45_2_5G?: number | null
    lan_rj45_10G?: number | null
    management_prot?: boolean | null
    max_lax_ports?: number | null
    usb_3_2_prots?: number | null
    expansion_ports?: number | null
    expansion_port_types?: string | null
    pcie_expansion?: string | null
    chassis_type?: string | null
    dimensions?: string | null
    rack_mount_kit?: string | null
    fan_size?: string | null
    fan_replaceable?: boolean | null
    led_brightness_adj?: boolean | null
    auto_power_recovery?: boolean | null
    noise_lenel?: string | null
    scheduled_power?: boolean | null
    wake_on_lan?: boolean | null
    dual_power_supply?: boolean | null
    ac_input_voltage?: string | null
    frequency?: string | null
    power_consumption?: string | null
    working_temperature?: string | null
    storage_temperature?: string | null
    relative_humidity?: string | null
    certifications?: NullableJsonNullValueInput | InputJsonValue
    warranty?: string | null
    environmental_compliance?: string | null
    package_contents?: NullableJsonNullValueInput | InputJsonValue
    optional_accessories?: NullableJsonNullValueInput | InputJsonValue
    cpu_threads?: number | null
  }

  export type product_tagsUpdateWithoutProductsInput = {
    product_name?: NullableStringFieldUpdateOperationsInput | string | null
    tag_spec?: NullableStringFieldUpdateOperationsInput | string | null
    tag_size?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: tagsUpdateOneRequiredWithoutProduct_tagsNestedInput
  }

  export type product_tagsUncheckedUpdateWithoutProductsInput = {
    tag_id?: StringFieldUpdateOperationsInput | string
    product_name?: NullableStringFieldUpdateOperationsInput | string | null
    tag_spec?: NullableStringFieldUpdateOperationsInput | string | null
    tag_size?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type product_tagsUncheckedUpdateManyWithoutProductsInput = {
    tag_id?: StringFieldUpdateOperationsInput | string
    product_name?: NullableStringFieldUpdateOperationsInput | string | null
    tag_spec?: NullableStringFieldUpdateOperationsInput | string | null
    tag_size?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type products_hardwareUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    controller_count?: NullableIntFieldUpdateOperationsInput | number | null
    cpu_model?: NullableStringFieldUpdateOperationsInput | string | null
    cpu_count?: NullableIntFieldUpdateOperationsInput | number | null
    cpu_cores?: NullableIntFieldUpdateOperationsInput | number | null
    cpu_architecture?: NullableStringFieldUpdateOperationsInput | string | null
    cpu_base_clock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cpu_turbo_clock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hardware_encryption?: NullableStringFieldUpdateOperationsInput | string | null
    memory_total?: NullableStringFieldUpdateOperationsInput | string | null
    memory_installed?: NullableStringFieldUpdateOperationsInput | string | null
    memory_slots?: NullableIntFieldUpdateOperationsInput | number | null
    memory_max?: NullableJsonNullValueInput | InputJsonValue
    disk_bays?: NullableIntFieldUpdateOperationsInput | number | null
    disk_bays_max?: NullableIntFieldUpdateOperationsInput | number | null
    disk_types_supported?: NullableJsonNullValueInput | InputJsonValue
    m2_slot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    disk_host_swappable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lan_rj45_1G?: NullableIntFieldUpdateOperationsInput | number | null
    lan_rj45_2_5G?: NullableIntFieldUpdateOperationsInput | number | null
    lan_rj45_10G?: NullableIntFieldUpdateOperationsInput | number | null
    management_prot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    max_lax_ports?: NullableIntFieldUpdateOperationsInput | number | null
    usb_3_2_prots?: NullableIntFieldUpdateOperationsInput | number | null
    expansion_ports?: NullableIntFieldUpdateOperationsInput | number | null
    expansion_port_types?: NullableStringFieldUpdateOperationsInput | string | null
    pcie_expansion?: NullableStringFieldUpdateOperationsInput | string | null
    chassis_type?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    rack_mount_kit?: NullableStringFieldUpdateOperationsInput | string | null
    fan_size?: NullableStringFieldUpdateOperationsInput | string | null
    fan_replaceable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    led_brightness_adj?: NullableBoolFieldUpdateOperationsInput | boolean | null
    auto_power_recovery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    noise_lenel?: NullableStringFieldUpdateOperationsInput | string | null
    scheduled_power?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wake_on_lan?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dual_power_supply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ac_input_voltage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    power_consumption?: NullableStringFieldUpdateOperationsInput | string | null
    working_temperature?: NullableStringFieldUpdateOperationsInput | string | null
    storage_temperature?: NullableStringFieldUpdateOperationsInput | string | null
    relative_humidity?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: NullableJsonNullValueInput | InputJsonValue
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
    environmental_compliance?: NullableStringFieldUpdateOperationsInput | string | null
    package_contents?: NullableJsonNullValueInput | InputJsonValue
    optional_accessories?: NullableJsonNullValueInput | InputJsonValue
    cpu_threads?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type products_hardwareUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    controller_count?: NullableIntFieldUpdateOperationsInput | number | null
    cpu_model?: NullableStringFieldUpdateOperationsInput | string | null
    cpu_count?: NullableIntFieldUpdateOperationsInput | number | null
    cpu_cores?: NullableIntFieldUpdateOperationsInput | number | null
    cpu_architecture?: NullableStringFieldUpdateOperationsInput | string | null
    cpu_base_clock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cpu_turbo_clock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hardware_encryption?: NullableStringFieldUpdateOperationsInput | string | null
    memory_total?: NullableStringFieldUpdateOperationsInput | string | null
    memory_installed?: NullableStringFieldUpdateOperationsInput | string | null
    memory_slots?: NullableIntFieldUpdateOperationsInput | number | null
    memory_max?: NullableJsonNullValueInput | InputJsonValue
    disk_bays?: NullableIntFieldUpdateOperationsInput | number | null
    disk_bays_max?: NullableIntFieldUpdateOperationsInput | number | null
    disk_types_supported?: NullableJsonNullValueInput | InputJsonValue
    m2_slot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    disk_host_swappable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lan_rj45_1G?: NullableIntFieldUpdateOperationsInput | number | null
    lan_rj45_2_5G?: NullableIntFieldUpdateOperationsInput | number | null
    lan_rj45_10G?: NullableIntFieldUpdateOperationsInput | number | null
    management_prot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    max_lax_ports?: NullableIntFieldUpdateOperationsInput | number | null
    usb_3_2_prots?: NullableIntFieldUpdateOperationsInput | number | null
    expansion_ports?: NullableIntFieldUpdateOperationsInput | number | null
    expansion_port_types?: NullableStringFieldUpdateOperationsInput | string | null
    pcie_expansion?: NullableStringFieldUpdateOperationsInput | string | null
    chassis_type?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    rack_mount_kit?: NullableStringFieldUpdateOperationsInput | string | null
    fan_size?: NullableStringFieldUpdateOperationsInput | string | null
    fan_replaceable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    led_brightness_adj?: NullableBoolFieldUpdateOperationsInput | boolean | null
    auto_power_recovery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    noise_lenel?: NullableStringFieldUpdateOperationsInput | string | null
    scheduled_power?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wake_on_lan?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dual_power_supply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ac_input_voltage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    power_consumption?: NullableStringFieldUpdateOperationsInput | string | null
    working_temperature?: NullableStringFieldUpdateOperationsInput | string | null
    storage_temperature?: NullableStringFieldUpdateOperationsInput | string | null
    relative_humidity?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: NullableJsonNullValueInput | InputJsonValue
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
    environmental_compliance?: NullableStringFieldUpdateOperationsInput | string | null
    package_contents?: NullableJsonNullValueInput | InputJsonValue
    optional_accessories?: NullableJsonNullValueInput | InputJsonValue
    cpu_threads?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type products_hardwareUncheckedUpdateManyWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    controller_count?: NullableIntFieldUpdateOperationsInput | number | null
    cpu_model?: NullableStringFieldUpdateOperationsInput | string | null
    cpu_count?: NullableIntFieldUpdateOperationsInput | number | null
    cpu_cores?: NullableIntFieldUpdateOperationsInput | number | null
    cpu_architecture?: NullableStringFieldUpdateOperationsInput | string | null
    cpu_base_clock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cpu_turbo_clock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hardware_encryption?: NullableStringFieldUpdateOperationsInput | string | null
    memory_total?: NullableStringFieldUpdateOperationsInput | string | null
    memory_installed?: NullableStringFieldUpdateOperationsInput | string | null
    memory_slots?: NullableIntFieldUpdateOperationsInput | number | null
    memory_max?: NullableJsonNullValueInput | InputJsonValue
    disk_bays?: NullableIntFieldUpdateOperationsInput | number | null
    disk_bays_max?: NullableIntFieldUpdateOperationsInput | number | null
    disk_types_supported?: NullableJsonNullValueInput | InputJsonValue
    m2_slot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    disk_host_swappable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lan_rj45_1G?: NullableIntFieldUpdateOperationsInput | number | null
    lan_rj45_2_5G?: NullableIntFieldUpdateOperationsInput | number | null
    lan_rj45_10G?: NullableIntFieldUpdateOperationsInput | number | null
    management_prot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    max_lax_ports?: NullableIntFieldUpdateOperationsInput | number | null
    usb_3_2_prots?: NullableIntFieldUpdateOperationsInput | number | null
    expansion_ports?: NullableIntFieldUpdateOperationsInput | number | null
    expansion_port_types?: NullableStringFieldUpdateOperationsInput | string | null
    pcie_expansion?: NullableStringFieldUpdateOperationsInput | string | null
    chassis_type?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    rack_mount_kit?: NullableStringFieldUpdateOperationsInput | string | null
    fan_size?: NullableStringFieldUpdateOperationsInput | string | null
    fan_replaceable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    led_brightness_adj?: NullableBoolFieldUpdateOperationsInput | boolean | null
    auto_power_recovery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    noise_lenel?: NullableStringFieldUpdateOperationsInput | string | null
    scheduled_power?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wake_on_lan?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dual_power_supply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ac_input_voltage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    power_consumption?: NullableStringFieldUpdateOperationsInput | string | null
    working_temperature?: NullableStringFieldUpdateOperationsInput | string | null
    storage_temperature?: NullableStringFieldUpdateOperationsInput | string | null
    relative_humidity?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: NullableJsonNullValueInput | InputJsonValue
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
    environmental_compliance?: NullableStringFieldUpdateOperationsInput | string | null
    package_contents?: NullableJsonNullValueInput | InputJsonValue
    optional_accessories?: NullableJsonNullValueInput | InputJsonValue
    cpu_threads?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tagsCreateManyTag_categoriesInput = {
    id?: string
    product_spec?: string | null
    product_size?: string | null
    sort_type?: number | null
    sort_order?: number | null
    spec_size?: string | null
  }

  export type tagsUpdateWithoutTag_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_spec?: NullableStringFieldUpdateOperationsInput | string | null
    product_size?: NullableStringFieldUpdateOperationsInput | string | null
    sort_type?: NullableIntFieldUpdateOperationsInput | number | null
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    spec_size?: NullableStringFieldUpdateOperationsInput | string | null
    product_tags?: product_tagsUpdateManyWithoutTagsNestedInput
  }

  export type tagsUncheckedUpdateWithoutTag_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_spec?: NullableStringFieldUpdateOperationsInput | string | null
    product_size?: NullableStringFieldUpdateOperationsInput | string | null
    sort_type?: NullableIntFieldUpdateOperationsInput | number | null
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    spec_size?: NullableStringFieldUpdateOperationsInput | string | null
    product_tags?: product_tagsUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type tagsUncheckedUpdateManyWithoutTag_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_spec?: NullableStringFieldUpdateOperationsInput | string | null
    product_size?: NullableStringFieldUpdateOperationsInput | string | null
    sort_type?: NullableIntFieldUpdateOperationsInput | number | null
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    spec_size?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type product_tagsCreateManyTagsInput = {
    product_id?: string
    product_name?: string | null
    tag_spec?: string | null
    tag_size?: string | null
  }

  export type product_tagsUpdateWithoutTagsInput = {
    product_name?: NullableStringFieldUpdateOperationsInput | string | null
    tag_spec?: NullableStringFieldUpdateOperationsInput | string | null
    tag_size?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUpdateOneRequiredWithoutProduct_tagsNestedInput
  }

  export type product_tagsUncheckedUpdateWithoutTagsInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    product_name?: NullableStringFieldUpdateOperationsInput | string | null
    tag_spec?: NullableStringFieldUpdateOperationsInput | string | null
    tag_size?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type product_tagsUncheckedUpdateManyWithoutTagsInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    product_name?: NullableStringFieldUpdateOperationsInput | string | null
    tag_spec?: NullableStringFieldUpdateOperationsInput | string | null
    tag_size?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FooterLinkCreateManyFooterInput = {
    id?: string
    title: string
    url: string
    category: string
    icon?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FooterLinkUpdateWithoutFooterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterLinkUncheckedUpdateWithoutFooterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterLinkUncheckedUpdateManyWithoutFooterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}