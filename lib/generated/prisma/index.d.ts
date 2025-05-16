
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Medication
 * 
 */
export type Medication = $Result.DefaultSelection<Prisma.$MedicationPayload>
/**
 * Model MedicationLog
 * 
 */
export type MedicationLog = $Result.DefaultSelection<Prisma.$MedicationLogPayload>
/**
 * Model ReminderSettings
 * 
 */
export type ReminderSettings = $Result.DefaultSelection<Prisma.$ReminderSettingsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medication`: Exposes CRUD operations for the **Medication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medications
    * const medications = await prisma.medication.findMany()
    * ```
    */
  get medication(): Prisma.MedicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicationLog`: Exposes CRUD operations for the **MedicationLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicationLogs
    * const medicationLogs = await prisma.medicationLog.findMany()
    * ```
    */
  get medicationLog(): Prisma.MedicationLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reminderSettings`: Exposes CRUD operations for the **ReminderSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReminderSettings
    * const reminderSettings = await prisma.reminderSettings.findMany()
    * ```
    */
  get reminderSettings(): Prisma.ReminderSettingsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    Medication: 'Medication',
    MedicationLog: 'MedicationLog',
    ReminderSettings: 'ReminderSettings'
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
      modelProps: "user" | "medication" | "medicationLog" | "reminderSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Medication: {
        payload: Prisma.$MedicationPayload<ExtArgs>
        fields: Prisma.MedicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findFirst: {
            args: Prisma.MedicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findMany: {
            args: Prisma.MedicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          create: {
            args: Prisma.MedicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          createMany: {
            args: Prisma.MedicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          delete: {
            args: Prisma.MedicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          update: {
            args: Prisma.MedicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          deleteMany: {
            args: Prisma.MedicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          upsert: {
            args: Prisma.MedicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          aggregate: {
            args: Prisma.MedicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedication>
          }
          groupBy: {
            args: Prisma.MedicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicationCountArgs<ExtArgs>
            result: $Utils.Optional<MedicationCountAggregateOutputType> | number
          }
        }
      }
      MedicationLog: {
        payload: Prisma.$MedicationLogPayload<ExtArgs>
        fields: Prisma.MedicationLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicationLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicationLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationLogPayload>
          }
          findFirst: {
            args: Prisma.MedicationLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicationLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationLogPayload>
          }
          findMany: {
            args: Prisma.MedicationLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationLogPayload>[]
          }
          create: {
            args: Prisma.MedicationLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationLogPayload>
          }
          createMany: {
            args: Prisma.MedicationLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicationLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationLogPayload>[]
          }
          delete: {
            args: Prisma.MedicationLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationLogPayload>
          }
          update: {
            args: Prisma.MedicationLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationLogPayload>
          }
          deleteMany: {
            args: Prisma.MedicationLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicationLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicationLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationLogPayload>[]
          }
          upsert: {
            args: Prisma.MedicationLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationLogPayload>
          }
          aggregate: {
            args: Prisma.MedicationLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicationLog>
          }
          groupBy: {
            args: Prisma.MedicationLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicationLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicationLogCountArgs<ExtArgs>
            result: $Utils.Optional<MedicationLogCountAggregateOutputType> | number
          }
        }
      }
      ReminderSettings: {
        payload: Prisma.$ReminderSettingsPayload<ExtArgs>
        fields: Prisma.ReminderSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReminderSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReminderSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderSettingsPayload>
          }
          findFirst: {
            args: Prisma.ReminderSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReminderSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderSettingsPayload>
          }
          findMany: {
            args: Prisma.ReminderSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderSettingsPayload>[]
          }
          create: {
            args: Prisma.ReminderSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderSettingsPayload>
          }
          createMany: {
            args: Prisma.ReminderSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReminderSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderSettingsPayload>[]
          }
          delete: {
            args: Prisma.ReminderSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderSettingsPayload>
          }
          update: {
            args: Prisma.ReminderSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderSettingsPayload>
          }
          deleteMany: {
            args: Prisma.ReminderSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReminderSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReminderSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderSettingsPayload>[]
          }
          upsert: {
            args: Prisma.ReminderSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderSettingsPayload>
          }
          aggregate: {
            args: Prisma.ReminderSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReminderSettings>
          }
          groupBy: {
            args: Prisma.ReminderSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReminderSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReminderSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<ReminderSettingsCountAggregateOutputType> | number
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
    user?: UserOmit
    medication?: MedicationOmit
    medicationLog?: MedicationLogOmit
    reminderSettings?: ReminderSettingsOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    medications: number
    medicationLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medications?: boolean | UserCountOutputTypeCountMedicationsArgs
    medicationLogs?: boolean | UserCountOutputTypeCountMedicationLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMedicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMedicationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationLogWhereInput
  }


  /**
   * Count Type MedicationCountOutputType
   */

  export type MedicationCountOutputType = {
    medicationLogs: number
  }

  export type MedicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicationLogs?: boolean | MedicationCountOutputTypeCountMedicationLogsArgs
  }

  // Custom InputTypes
  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationCountOutputType
     */
    select?: MedicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeCountMedicationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationLogWhereInput
  }


  /**
   * Models
   */

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
    name: string | null
    email: string | null
    emailVerified: Date | null
    hashedPassword: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    hashedPassword: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    hashedPassword: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    hashedPassword?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    hashedPassword?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    hashedPassword?: true
    image?: true
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
    name: string | null
    email: string
    emailVerified: Date | null
    hashedPassword: string | null
    image: string | null
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
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    hashedPassword?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medications?: boolean | User$medicationsArgs<ExtArgs>
    medicationLogs?: boolean | User$medicationLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    hashedPassword?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    hashedPassword?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    hashedPassword?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "hashedPassword" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medications?: boolean | User$medicationsArgs<ExtArgs>
    medicationLogs?: boolean | User$medicationLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      medications: Prisma.$MedicationPayload<ExtArgs>[]
      medicationLogs: Prisma.$MedicationLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      hashedPassword: string | null
      image: string | null
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
    medications<T extends User$medicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$medicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medicationLogs<T extends User$medicationLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$medicationLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.medications
   */
  export type User$medicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    cursor?: MedicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * User.medicationLogs
   */
  export type User$medicationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationLog
     */
    omit?: MedicationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
    where?: MedicationLogWhereInput
    orderBy?: MedicationLogOrderByWithRelationInput | MedicationLogOrderByWithRelationInput[]
    cursor?: MedicationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicationLogScalarFieldEnum | MedicationLogScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Medication
   */

  export type AggregateMedication = {
    _count: MedicationCountAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  export type MedicationMinAggregateOutputType = {
    id: string | null
    name: string | null
    dosage: string | null
    frequency: string | null
    startDate: Date | null
    endDate: Date | null
    instructions: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type MedicationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    dosage: string | null
    frequency: string | null
    startDate: Date | null
    endDate: Date | null
    instructions: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type MedicationCountAggregateOutputType = {
    id: number
    name: number
    dosage: number
    frequency: number
    timeOfDay: number
    startDate: number
    endDate: number
    instructions: number
    color: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type MedicationMinAggregateInputType = {
    id?: true
    name?: true
    dosage?: true
    frequency?: true
    startDate?: true
    endDate?: true
    instructions?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type MedicationMaxAggregateInputType = {
    id?: true
    name?: true
    dosage?: true
    frequency?: true
    startDate?: true
    endDate?: true
    instructions?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type MedicationCountAggregateInputType = {
    id?: true
    name?: true
    dosage?: true
    frequency?: true
    timeOfDay?: true
    startDate?: true
    endDate?: true
    instructions?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type MedicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medication to aggregate.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medications
    **/
    _count?: true | MedicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicationMaxAggregateInputType
  }

  export type GetMedicationAggregateType<T extends MedicationAggregateArgs> = {
        [P in keyof T & keyof AggregateMedication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedication[P]>
      : GetScalarType<T[P], AggregateMedication[P]>
  }




  export type MedicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithAggregationInput | MedicationOrderByWithAggregationInput[]
    by: MedicationScalarFieldEnum[] | MedicationScalarFieldEnum
    having?: MedicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicationCountAggregateInputType | true
    _min?: MedicationMinAggregateInputType
    _max?: MedicationMaxAggregateInputType
  }

  export type MedicationGroupByOutputType = {
    id: string
    name: string
    dosage: string
    frequency: string
    timeOfDay: string[]
    startDate: Date
    endDate: Date | null
    instructions: string | null
    color: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: MedicationCountAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  type GetMedicationGroupByPayload<T extends MedicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicationGroupByOutputType[P]>
            : GetScalarType<T[P], MedicationGroupByOutputType[P]>
        }
      >
    >


  export type MedicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dosage?: boolean
    frequency?: boolean
    timeOfDay?: boolean
    startDate?: boolean
    endDate?: boolean
    instructions?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    medicationLogs?: boolean | Medication$medicationLogsArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dosage?: boolean
    frequency?: boolean
    timeOfDay?: boolean
    startDate?: boolean
    endDate?: boolean
    instructions?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dosage?: boolean
    frequency?: boolean
    timeOfDay?: boolean
    startDate?: boolean
    endDate?: boolean
    instructions?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectScalar = {
    id?: boolean
    name?: boolean
    dosage?: boolean
    frequency?: boolean
    timeOfDay?: boolean
    startDate?: boolean
    endDate?: boolean
    instructions?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type MedicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "dosage" | "frequency" | "timeOfDay" | "startDate" | "endDate" | "instructions" | "color" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["medication"]>
  export type MedicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    medicationLogs?: boolean | Medication$medicationLogsArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MedicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MedicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medication"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      medicationLogs: Prisma.$MedicationLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      dosage: string
      frequency: string
      timeOfDay: string[]
      startDate: Date
      endDate: Date | null
      instructions: string | null
      color: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["medication"]>
    composites: {}
  }

  type MedicationGetPayload<S extends boolean | null | undefined | MedicationDefaultArgs> = $Result.GetResult<Prisma.$MedicationPayload, S>

  type MedicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicationCountAggregateInputType | true
    }

  export interface MedicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medication'], meta: { name: 'Medication' } }
    /**
     * Find zero or one Medication that matches the filter.
     * @param {MedicationFindUniqueArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicationFindUniqueArgs>(args: SelectSubset<T, MedicationFindUniqueArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicationFindUniqueOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicationFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicationFindFirstArgs>(args?: SelectSubset<T, MedicationFindFirstArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicationFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medications
     * const medications = await prisma.medication.findMany()
     * 
     * // Get first 10 Medications
     * const medications = await prisma.medication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicationWithIdOnly = await prisma.medication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicationFindManyArgs>(args?: SelectSubset<T, MedicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medication.
     * @param {MedicationCreateArgs} args - Arguments to create a Medication.
     * @example
     * // Create one Medication
     * const Medication = await prisma.medication.create({
     *   data: {
     *     // ... data to create a Medication
     *   }
     * })
     * 
     */
    create<T extends MedicationCreateArgs>(args: SelectSubset<T, MedicationCreateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medications.
     * @param {MedicationCreateManyArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicationCreateManyArgs>(args?: SelectSubset<T, MedicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medications and returns the data saved in the database.
     * @param {MedicationCreateManyAndReturnArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medications and only return the `id`
     * const medicationWithIdOnly = await prisma.medication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicationCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medication.
     * @param {MedicationDeleteArgs} args - Arguments to delete one Medication.
     * @example
     * // Delete one Medication
     * const Medication = await prisma.medication.delete({
     *   where: {
     *     // ... filter to delete one Medication
     *   }
     * })
     * 
     */
    delete<T extends MedicationDeleteArgs>(args: SelectSubset<T, MedicationDeleteArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medication.
     * @param {MedicationUpdateArgs} args - Arguments to update one Medication.
     * @example
     * // Update one Medication
     * const medication = await prisma.medication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicationUpdateArgs>(args: SelectSubset<T, MedicationUpdateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medications.
     * @param {MedicationDeleteManyArgs} args - Arguments to filter Medications to delete.
     * @example
     * // Delete a few Medications
     * const { count } = await prisma.medication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicationDeleteManyArgs>(args?: SelectSubset<T, MedicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicationUpdateManyArgs>(args: SelectSubset<T, MedicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications and returns the data updated in the database.
     * @param {MedicationUpdateManyAndReturnArgs} args - Arguments to update many Medications.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medications and only return the `id`
     * const medicationWithIdOnly = await prisma.medication.updateManyAndReturn({
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
    updateManyAndReturn<T extends MedicationUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medication.
     * @param {MedicationUpsertArgs} args - Arguments to update or create a Medication.
     * @example
     * // Update or create a Medication
     * const medication = await prisma.medication.upsert({
     *   create: {
     *     // ... data to create a Medication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medication we want to update
     *   }
     * })
     */
    upsert<T extends MedicationUpsertArgs>(args: SelectSubset<T, MedicationUpsertArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationCountArgs} args - Arguments to filter Medications to count.
     * @example
     * // Count the number of Medications
     * const count = await prisma.medication.count({
     *   where: {
     *     // ... the filter for the Medications we want to count
     *   }
     * })
    **/
    count<T extends MedicationCountArgs>(
      args?: Subset<T, MedicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicationAggregateArgs>(args: Subset<T, MedicationAggregateArgs>): Prisma.PrismaPromise<GetMedicationAggregateType<T>>

    /**
     * Group by Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationGroupByArgs} args - Group by arguments.
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
      T extends MedicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicationGroupByArgs['orderBy'] }
        : { orderBy?: MedicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medication model
   */
  readonly fields: MedicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medicationLogs<T extends Medication$medicationLogsArgs<ExtArgs> = {}>(args?: Subset<T, Medication$medicationLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Medication model
   */
  interface MedicationFieldRefs {
    readonly id: FieldRef<"Medication", 'String'>
    readonly name: FieldRef<"Medication", 'String'>
    readonly dosage: FieldRef<"Medication", 'String'>
    readonly frequency: FieldRef<"Medication", 'String'>
    readonly timeOfDay: FieldRef<"Medication", 'String[]'>
    readonly startDate: FieldRef<"Medication", 'DateTime'>
    readonly endDate: FieldRef<"Medication", 'DateTime'>
    readonly instructions: FieldRef<"Medication", 'String'>
    readonly color: FieldRef<"Medication", 'String'>
    readonly createdAt: FieldRef<"Medication", 'DateTime'>
    readonly updatedAt: FieldRef<"Medication", 'DateTime'>
    readonly userId: FieldRef<"Medication", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Medication findUnique
   */
  export type MedicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findUniqueOrThrow
   */
  export type MedicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findFirst
   */
  export type MedicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findFirstOrThrow
   */
  export type MedicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findMany
   */
  export type MedicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medications to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication create
   */
  export type MedicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Medication.
     */
    data: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
  }

  /**
   * Medication createMany
   */
  export type MedicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medication createManyAndReturn
   */
  export type MedicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medication update
   */
  export type MedicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Medication.
     */
    data: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
    /**
     * Choose, which Medication to update.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication updateMany
   */
  export type MedicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
  }

  /**
   * Medication updateManyAndReturn
   */
  export type MedicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medication upsert
   */
  export type MedicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Medication to update in case it exists.
     */
    where: MedicationWhereUniqueInput
    /**
     * In case the Medication found by the `where` argument doesn't exist, create a new Medication with this data.
     */
    create: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
    /**
     * In case the Medication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
  }

  /**
   * Medication delete
   */
  export type MedicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter which Medication to delete.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication deleteMany
   */
  export type MedicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medications to delete
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to delete.
     */
    limit?: number
  }

  /**
   * Medication.medicationLogs
   */
  export type Medication$medicationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationLog
     */
    omit?: MedicationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
    where?: MedicationLogWhereInput
    orderBy?: MedicationLogOrderByWithRelationInput | MedicationLogOrderByWithRelationInput[]
    cursor?: MedicationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicationLogScalarFieldEnum | MedicationLogScalarFieldEnum[]
  }

  /**
   * Medication without action
   */
  export type MedicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
  }


  /**
   * Model MedicationLog
   */

  export type AggregateMedicationLog = {
    _count: MedicationLogCountAggregateOutputType | null
    _min: MedicationLogMinAggregateOutputType | null
    _max: MedicationLogMaxAggregateOutputType | null
  }

  export type MedicationLogMinAggregateOutputType = {
    id: string | null
    taken: boolean | null
    skipped: boolean | null
    scheduledFor: Date | null
    takenAt: Date | null
    note: string | null
    medicationId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationLogMaxAggregateOutputType = {
    id: string | null
    taken: boolean | null
    skipped: boolean | null
    scheduledFor: Date | null
    takenAt: Date | null
    note: string | null
    medicationId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationLogCountAggregateOutputType = {
    id: number
    taken: number
    skipped: number
    scheduledFor: number
    takenAt: number
    note: number
    medicationId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicationLogMinAggregateInputType = {
    id?: true
    taken?: true
    skipped?: true
    scheduledFor?: true
    takenAt?: true
    note?: true
    medicationId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationLogMaxAggregateInputType = {
    id?: true
    taken?: true
    skipped?: true
    scheduledFor?: true
    takenAt?: true
    note?: true
    medicationId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationLogCountAggregateInputType = {
    id?: true
    taken?: true
    skipped?: true
    scheduledFor?: true
    takenAt?: true
    note?: true
    medicationId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicationLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicationLog to aggregate.
     */
    where?: MedicationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationLogs to fetch.
     */
    orderBy?: MedicationLogOrderByWithRelationInput | MedicationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicationLogs
    **/
    _count?: true | MedicationLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicationLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicationLogMaxAggregateInputType
  }

  export type GetMedicationLogAggregateType<T extends MedicationLogAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicationLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicationLog[P]>
      : GetScalarType<T[P], AggregateMedicationLog[P]>
  }




  export type MedicationLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationLogWhereInput
    orderBy?: MedicationLogOrderByWithAggregationInput | MedicationLogOrderByWithAggregationInput[]
    by: MedicationLogScalarFieldEnum[] | MedicationLogScalarFieldEnum
    having?: MedicationLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicationLogCountAggregateInputType | true
    _min?: MedicationLogMinAggregateInputType
    _max?: MedicationLogMaxAggregateInputType
  }

  export type MedicationLogGroupByOutputType = {
    id: string
    taken: boolean
    skipped: boolean
    scheduledFor: Date
    takenAt: Date
    note: string | null
    medicationId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: MedicationLogCountAggregateOutputType | null
    _min: MedicationLogMinAggregateOutputType | null
    _max: MedicationLogMaxAggregateOutputType | null
  }

  type GetMedicationLogGroupByPayload<T extends MedicationLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicationLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicationLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicationLogGroupByOutputType[P]>
            : GetScalarType<T[P], MedicationLogGroupByOutputType[P]>
        }
      >
    >


  export type MedicationLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taken?: boolean
    skipped?: boolean
    scheduledFor?: boolean
    takenAt?: boolean
    note?: boolean
    medicationId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicationLog"]>

  export type MedicationLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taken?: boolean
    skipped?: boolean
    scheduledFor?: boolean
    takenAt?: boolean
    note?: boolean
    medicationId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicationLog"]>

  export type MedicationLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taken?: boolean
    skipped?: boolean
    scheduledFor?: boolean
    takenAt?: boolean
    note?: boolean
    medicationId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicationLog"]>

  export type MedicationLogSelectScalar = {
    id?: boolean
    taken?: boolean
    skipped?: boolean
    scheduledFor?: boolean
    takenAt?: boolean
    note?: boolean
    medicationId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicationLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taken" | "skipped" | "scheduledFor" | "takenAt" | "note" | "medicationId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["medicationLog"]>
  export type MedicationLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MedicationLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MedicationLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MedicationLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicationLog"
    objects: {
      medication: Prisma.$MedicationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taken: boolean
      skipped: boolean
      scheduledFor: Date
      takenAt: Date
      note: string | null
      medicationId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicationLog"]>
    composites: {}
  }

  type MedicationLogGetPayload<S extends boolean | null | undefined | MedicationLogDefaultArgs> = $Result.GetResult<Prisma.$MedicationLogPayload, S>

  type MedicationLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicationLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicationLogCountAggregateInputType | true
    }

  export interface MedicationLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicationLog'], meta: { name: 'MedicationLog' } }
    /**
     * Find zero or one MedicationLog that matches the filter.
     * @param {MedicationLogFindUniqueArgs} args - Arguments to find a MedicationLog
     * @example
     * // Get one MedicationLog
     * const medicationLog = await prisma.medicationLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicationLogFindUniqueArgs>(args: SelectSubset<T, MedicationLogFindUniqueArgs<ExtArgs>>): Prisma__MedicationLogClient<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicationLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicationLogFindUniqueOrThrowArgs} args - Arguments to find a MedicationLog
     * @example
     * // Get one MedicationLog
     * const medicationLog = await prisma.medicationLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicationLogFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicationLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicationLogClient<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicationLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationLogFindFirstArgs} args - Arguments to find a MedicationLog
     * @example
     * // Get one MedicationLog
     * const medicationLog = await prisma.medicationLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicationLogFindFirstArgs>(args?: SelectSubset<T, MedicationLogFindFirstArgs<ExtArgs>>): Prisma__MedicationLogClient<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicationLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationLogFindFirstOrThrowArgs} args - Arguments to find a MedicationLog
     * @example
     * // Get one MedicationLog
     * const medicationLog = await prisma.medicationLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicationLogFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicationLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicationLogClient<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicationLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicationLogs
     * const medicationLogs = await prisma.medicationLog.findMany()
     * 
     * // Get first 10 MedicationLogs
     * const medicationLogs = await prisma.medicationLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicationLogWithIdOnly = await prisma.medicationLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicationLogFindManyArgs>(args?: SelectSubset<T, MedicationLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicationLog.
     * @param {MedicationLogCreateArgs} args - Arguments to create a MedicationLog.
     * @example
     * // Create one MedicationLog
     * const MedicationLog = await prisma.medicationLog.create({
     *   data: {
     *     // ... data to create a MedicationLog
     *   }
     * })
     * 
     */
    create<T extends MedicationLogCreateArgs>(args: SelectSubset<T, MedicationLogCreateArgs<ExtArgs>>): Prisma__MedicationLogClient<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicationLogs.
     * @param {MedicationLogCreateManyArgs} args - Arguments to create many MedicationLogs.
     * @example
     * // Create many MedicationLogs
     * const medicationLog = await prisma.medicationLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicationLogCreateManyArgs>(args?: SelectSubset<T, MedicationLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicationLogs and returns the data saved in the database.
     * @param {MedicationLogCreateManyAndReturnArgs} args - Arguments to create many MedicationLogs.
     * @example
     * // Create many MedicationLogs
     * const medicationLog = await prisma.medicationLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicationLogs and only return the `id`
     * const medicationLogWithIdOnly = await prisma.medicationLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicationLogCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicationLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicationLog.
     * @param {MedicationLogDeleteArgs} args - Arguments to delete one MedicationLog.
     * @example
     * // Delete one MedicationLog
     * const MedicationLog = await prisma.medicationLog.delete({
     *   where: {
     *     // ... filter to delete one MedicationLog
     *   }
     * })
     * 
     */
    delete<T extends MedicationLogDeleteArgs>(args: SelectSubset<T, MedicationLogDeleteArgs<ExtArgs>>): Prisma__MedicationLogClient<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicationLog.
     * @param {MedicationLogUpdateArgs} args - Arguments to update one MedicationLog.
     * @example
     * // Update one MedicationLog
     * const medicationLog = await prisma.medicationLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicationLogUpdateArgs>(args: SelectSubset<T, MedicationLogUpdateArgs<ExtArgs>>): Prisma__MedicationLogClient<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicationLogs.
     * @param {MedicationLogDeleteManyArgs} args - Arguments to filter MedicationLogs to delete.
     * @example
     * // Delete a few MedicationLogs
     * const { count } = await prisma.medicationLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicationLogDeleteManyArgs>(args?: SelectSubset<T, MedicationLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicationLogs
     * const medicationLog = await prisma.medicationLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicationLogUpdateManyArgs>(args: SelectSubset<T, MedicationLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicationLogs and returns the data updated in the database.
     * @param {MedicationLogUpdateManyAndReturnArgs} args - Arguments to update many MedicationLogs.
     * @example
     * // Update many MedicationLogs
     * const medicationLog = await prisma.medicationLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicationLogs and only return the `id`
     * const medicationLogWithIdOnly = await prisma.medicationLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends MedicationLogUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicationLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicationLog.
     * @param {MedicationLogUpsertArgs} args - Arguments to update or create a MedicationLog.
     * @example
     * // Update or create a MedicationLog
     * const medicationLog = await prisma.medicationLog.upsert({
     *   create: {
     *     // ... data to create a MedicationLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicationLog we want to update
     *   }
     * })
     */
    upsert<T extends MedicationLogUpsertArgs>(args: SelectSubset<T, MedicationLogUpsertArgs<ExtArgs>>): Prisma__MedicationLogClient<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationLogCountArgs} args - Arguments to filter MedicationLogs to count.
     * @example
     * // Count the number of MedicationLogs
     * const count = await prisma.medicationLog.count({
     *   where: {
     *     // ... the filter for the MedicationLogs we want to count
     *   }
     * })
    **/
    count<T extends MedicationLogCountArgs>(
      args?: Subset<T, MedicationLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicationLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicationLogAggregateArgs>(args: Subset<T, MedicationLogAggregateArgs>): Prisma.PrismaPromise<GetMedicationLogAggregateType<T>>

    /**
     * Group by MedicationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationLogGroupByArgs} args - Group by arguments.
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
      T extends MedicationLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicationLogGroupByArgs['orderBy'] }
        : { orderBy?: MedicationLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicationLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicationLog model
   */
  readonly fields: MedicationLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicationLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicationLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medication<T extends MedicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicationDefaultArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MedicationLog model
   */
  interface MedicationLogFieldRefs {
    readonly id: FieldRef<"MedicationLog", 'String'>
    readonly taken: FieldRef<"MedicationLog", 'Boolean'>
    readonly skipped: FieldRef<"MedicationLog", 'Boolean'>
    readonly scheduledFor: FieldRef<"MedicationLog", 'DateTime'>
    readonly takenAt: FieldRef<"MedicationLog", 'DateTime'>
    readonly note: FieldRef<"MedicationLog", 'String'>
    readonly medicationId: FieldRef<"MedicationLog", 'String'>
    readonly userId: FieldRef<"MedicationLog", 'String'>
    readonly createdAt: FieldRef<"MedicationLog", 'DateTime'>
    readonly updatedAt: FieldRef<"MedicationLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicationLog findUnique
   */
  export type MedicationLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationLog
     */
    omit?: MedicationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
    /**
     * Filter, which MedicationLog to fetch.
     */
    where: MedicationLogWhereUniqueInput
  }

  /**
   * MedicationLog findUniqueOrThrow
   */
  export type MedicationLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationLog
     */
    omit?: MedicationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
    /**
     * Filter, which MedicationLog to fetch.
     */
    where: MedicationLogWhereUniqueInput
  }

  /**
   * MedicationLog findFirst
   */
  export type MedicationLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationLog
     */
    omit?: MedicationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
    /**
     * Filter, which MedicationLog to fetch.
     */
    where?: MedicationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationLogs to fetch.
     */
    orderBy?: MedicationLogOrderByWithRelationInput | MedicationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicationLogs.
     */
    cursor?: MedicationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicationLogs.
     */
    distinct?: MedicationLogScalarFieldEnum | MedicationLogScalarFieldEnum[]
  }

  /**
   * MedicationLog findFirstOrThrow
   */
  export type MedicationLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationLog
     */
    omit?: MedicationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
    /**
     * Filter, which MedicationLog to fetch.
     */
    where?: MedicationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationLogs to fetch.
     */
    orderBy?: MedicationLogOrderByWithRelationInput | MedicationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicationLogs.
     */
    cursor?: MedicationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicationLogs.
     */
    distinct?: MedicationLogScalarFieldEnum | MedicationLogScalarFieldEnum[]
  }

  /**
   * MedicationLog findMany
   */
  export type MedicationLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationLog
     */
    omit?: MedicationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
    /**
     * Filter, which MedicationLogs to fetch.
     */
    where?: MedicationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationLogs to fetch.
     */
    orderBy?: MedicationLogOrderByWithRelationInput | MedicationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicationLogs.
     */
    cursor?: MedicationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationLogs.
     */
    skip?: number
    distinct?: MedicationLogScalarFieldEnum | MedicationLogScalarFieldEnum[]
  }

  /**
   * MedicationLog create
   */
  export type MedicationLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationLog
     */
    omit?: MedicationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicationLog.
     */
    data: XOR<MedicationLogCreateInput, MedicationLogUncheckedCreateInput>
  }

  /**
   * MedicationLog createMany
   */
  export type MedicationLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicationLogs.
     */
    data: MedicationLogCreateManyInput | MedicationLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicationLog createManyAndReturn
   */
  export type MedicationLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationLog
     */
    omit?: MedicationLogOmit<ExtArgs> | null
    /**
     * The data used to create many MedicationLogs.
     */
    data: MedicationLogCreateManyInput | MedicationLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicationLog update
   */
  export type MedicationLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationLog
     */
    omit?: MedicationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicationLog.
     */
    data: XOR<MedicationLogUpdateInput, MedicationLogUncheckedUpdateInput>
    /**
     * Choose, which MedicationLog to update.
     */
    where: MedicationLogWhereUniqueInput
  }

  /**
   * MedicationLog updateMany
   */
  export type MedicationLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicationLogs.
     */
    data: XOR<MedicationLogUpdateManyMutationInput, MedicationLogUncheckedUpdateManyInput>
    /**
     * Filter which MedicationLogs to update
     */
    where?: MedicationLogWhereInput
    /**
     * Limit how many MedicationLogs to update.
     */
    limit?: number
  }

  /**
   * MedicationLog updateManyAndReturn
   */
  export type MedicationLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationLog
     */
    omit?: MedicationLogOmit<ExtArgs> | null
    /**
     * The data used to update MedicationLogs.
     */
    data: XOR<MedicationLogUpdateManyMutationInput, MedicationLogUncheckedUpdateManyInput>
    /**
     * Filter which MedicationLogs to update
     */
    where?: MedicationLogWhereInput
    /**
     * Limit how many MedicationLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicationLog upsert
   */
  export type MedicationLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationLog
     */
    omit?: MedicationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicationLog to update in case it exists.
     */
    where: MedicationLogWhereUniqueInput
    /**
     * In case the MedicationLog found by the `where` argument doesn't exist, create a new MedicationLog with this data.
     */
    create: XOR<MedicationLogCreateInput, MedicationLogUncheckedCreateInput>
    /**
     * In case the MedicationLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicationLogUpdateInput, MedicationLogUncheckedUpdateInput>
  }

  /**
   * MedicationLog delete
   */
  export type MedicationLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationLog
     */
    omit?: MedicationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
    /**
     * Filter which MedicationLog to delete.
     */
    where: MedicationLogWhereUniqueInput
  }

  /**
   * MedicationLog deleteMany
   */
  export type MedicationLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicationLogs to delete
     */
    where?: MedicationLogWhereInput
    /**
     * Limit how many MedicationLogs to delete.
     */
    limit?: number
  }

  /**
   * MedicationLog without action
   */
  export type MedicationLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationLog
     */
    omit?: MedicationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
  }


  /**
   * Model ReminderSettings
   */

  export type AggregateReminderSettings = {
    _count: ReminderSettingsCountAggregateOutputType | null
    _avg: ReminderSettingsAvgAggregateOutputType | null
    _sum: ReminderSettingsSumAggregateOutputType | null
    _min: ReminderSettingsMinAggregateOutputType | null
    _max: ReminderSettingsMaxAggregateOutputType | null
  }

  export type ReminderSettingsAvgAggregateOutputType = {
    reminderTimeOffset: number | null
  }

  export type ReminderSettingsSumAggregateOutputType = {
    reminderTimeOffset: number | null
  }

  export type ReminderSettingsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    emailReminders: boolean | null
    reminderTimeOffset: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReminderSettingsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    emailReminders: boolean | null
    reminderTimeOffset: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReminderSettingsCountAggregateOutputType = {
    id: number
    userId: number
    emailReminders: number
    reminderTimeOffset: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReminderSettingsAvgAggregateInputType = {
    reminderTimeOffset?: true
  }

  export type ReminderSettingsSumAggregateInputType = {
    reminderTimeOffset?: true
  }

  export type ReminderSettingsMinAggregateInputType = {
    id?: true
    userId?: true
    emailReminders?: true
    reminderTimeOffset?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReminderSettingsMaxAggregateInputType = {
    id?: true
    userId?: true
    emailReminders?: true
    reminderTimeOffset?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReminderSettingsCountAggregateInputType = {
    id?: true
    userId?: true
    emailReminders?: true
    reminderTimeOffset?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReminderSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReminderSettings to aggregate.
     */
    where?: ReminderSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReminderSettings to fetch.
     */
    orderBy?: ReminderSettingsOrderByWithRelationInput | ReminderSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReminderSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReminderSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReminderSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReminderSettings
    **/
    _count?: true | ReminderSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReminderSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReminderSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReminderSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReminderSettingsMaxAggregateInputType
  }

  export type GetReminderSettingsAggregateType<T extends ReminderSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateReminderSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminderSettings[P]>
      : GetScalarType<T[P], AggregateReminderSettings[P]>
  }




  export type ReminderSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderSettingsWhereInput
    orderBy?: ReminderSettingsOrderByWithAggregationInput | ReminderSettingsOrderByWithAggregationInput[]
    by: ReminderSettingsScalarFieldEnum[] | ReminderSettingsScalarFieldEnum
    having?: ReminderSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReminderSettingsCountAggregateInputType | true
    _avg?: ReminderSettingsAvgAggregateInputType
    _sum?: ReminderSettingsSumAggregateInputType
    _min?: ReminderSettingsMinAggregateInputType
    _max?: ReminderSettingsMaxAggregateInputType
  }

  export type ReminderSettingsGroupByOutputType = {
    id: string
    userId: string
    emailReminders: boolean
    reminderTimeOffset: number
    createdAt: Date
    updatedAt: Date
    _count: ReminderSettingsCountAggregateOutputType | null
    _avg: ReminderSettingsAvgAggregateOutputType | null
    _sum: ReminderSettingsSumAggregateOutputType | null
    _min: ReminderSettingsMinAggregateOutputType | null
    _max: ReminderSettingsMaxAggregateOutputType | null
  }

  type GetReminderSettingsGroupByPayload<T extends ReminderSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReminderSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReminderSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReminderSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], ReminderSettingsGroupByOutputType[P]>
        }
      >
    >


  export type ReminderSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    emailReminders?: boolean
    reminderTimeOffset?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reminderSettings"]>

  export type ReminderSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    emailReminders?: boolean
    reminderTimeOffset?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reminderSettings"]>

  export type ReminderSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    emailReminders?: boolean
    reminderTimeOffset?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reminderSettings"]>

  export type ReminderSettingsSelectScalar = {
    id?: boolean
    userId?: boolean
    emailReminders?: boolean
    reminderTimeOffset?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReminderSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "emailReminders" | "reminderTimeOffset" | "createdAt" | "updatedAt", ExtArgs["result"]["reminderSettings"]>

  export type $ReminderSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReminderSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      emailReminders: boolean
      reminderTimeOffset: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reminderSettings"]>
    composites: {}
  }

  type ReminderSettingsGetPayload<S extends boolean | null | undefined | ReminderSettingsDefaultArgs> = $Result.GetResult<Prisma.$ReminderSettingsPayload, S>

  type ReminderSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReminderSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReminderSettingsCountAggregateInputType | true
    }

  export interface ReminderSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReminderSettings'], meta: { name: 'ReminderSettings' } }
    /**
     * Find zero or one ReminderSettings that matches the filter.
     * @param {ReminderSettingsFindUniqueArgs} args - Arguments to find a ReminderSettings
     * @example
     * // Get one ReminderSettings
     * const reminderSettings = await prisma.reminderSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReminderSettingsFindUniqueArgs>(args: SelectSubset<T, ReminderSettingsFindUniqueArgs<ExtArgs>>): Prisma__ReminderSettingsClient<$Result.GetResult<Prisma.$ReminderSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReminderSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReminderSettingsFindUniqueOrThrowArgs} args - Arguments to find a ReminderSettings
     * @example
     * // Get one ReminderSettings
     * const reminderSettings = await prisma.reminderSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReminderSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReminderSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReminderSettingsClient<$Result.GetResult<Prisma.$ReminderSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReminderSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderSettingsFindFirstArgs} args - Arguments to find a ReminderSettings
     * @example
     * // Get one ReminderSettings
     * const reminderSettings = await prisma.reminderSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReminderSettingsFindFirstArgs>(args?: SelectSubset<T, ReminderSettingsFindFirstArgs<ExtArgs>>): Prisma__ReminderSettingsClient<$Result.GetResult<Prisma.$ReminderSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReminderSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderSettingsFindFirstOrThrowArgs} args - Arguments to find a ReminderSettings
     * @example
     * // Get one ReminderSettings
     * const reminderSettings = await prisma.reminderSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReminderSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReminderSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReminderSettingsClient<$Result.GetResult<Prisma.$ReminderSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReminderSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReminderSettings
     * const reminderSettings = await prisma.reminderSettings.findMany()
     * 
     * // Get first 10 ReminderSettings
     * const reminderSettings = await prisma.reminderSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reminderSettingsWithIdOnly = await prisma.reminderSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReminderSettingsFindManyArgs>(args?: SelectSubset<T, ReminderSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReminderSettings.
     * @param {ReminderSettingsCreateArgs} args - Arguments to create a ReminderSettings.
     * @example
     * // Create one ReminderSettings
     * const ReminderSettings = await prisma.reminderSettings.create({
     *   data: {
     *     // ... data to create a ReminderSettings
     *   }
     * })
     * 
     */
    create<T extends ReminderSettingsCreateArgs>(args: SelectSubset<T, ReminderSettingsCreateArgs<ExtArgs>>): Prisma__ReminderSettingsClient<$Result.GetResult<Prisma.$ReminderSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReminderSettings.
     * @param {ReminderSettingsCreateManyArgs} args - Arguments to create many ReminderSettings.
     * @example
     * // Create many ReminderSettings
     * const reminderSettings = await prisma.reminderSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReminderSettingsCreateManyArgs>(args?: SelectSubset<T, ReminderSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReminderSettings and returns the data saved in the database.
     * @param {ReminderSettingsCreateManyAndReturnArgs} args - Arguments to create many ReminderSettings.
     * @example
     * // Create many ReminderSettings
     * const reminderSettings = await prisma.reminderSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReminderSettings and only return the `id`
     * const reminderSettingsWithIdOnly = await prisma.reminderSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReminderSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, ReminderSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReminderSettings.
     * @param {ReminderSettingsDeleteArgs} args - Arguments to delete one ReminderSettings.
     * @example
     * // Delete one ReminderSettings
     * const ReminderSettings = await prisma.reminderSettings.delete({
     *   where: {
     *     // ... filter to delete one ReminderSettings
     *   }
     * })
     * 
     */
    delete<T extends ReminderSettingsDeleteArgs>(args: SelectSubset<T, ReminderSettingsDeleteArgs<ExtArgs>>): Prisma__ReminderSettingsClient<$Result.GetResult<Prisma.$ReminderSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReminderSettings.
     * @param {ReminderSettingsUpdateArgs} args - Arguments to update one ReminderSettings.
     * @example
     * // Update one ReminderSettings
     * const reminderSettings = await prisma.reminderSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReminderSettingsUpdateArgs>(args: SelectSubset<T, ReminderSettingsUpdateArgs<ExtArgs>>): Prisma__ReminderSettingsClient<$Result.GetResult<Prisma.$ReminderSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReminderSettings.
     * @param {ReminderSettingsDeleteManyArgs} args - Arguments to filter ReminderSettings to delete.
     * @example
     * // Delete a few ReminderSettings
     * const { count } = await prisma.reminderSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReminderSettingsDeleteManyArgs>(args?: SelectSubset<T, ReminderSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReminderSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReminderSettings
     * const reminderSettings = await prisma.reminderSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReminderSettingsUpdateManyArgs>(args: SelectSubset<T, ReminderSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReminderSettings and returns the data updated in the database.
     * @param {ReminderSettingsUpdateManyAndReturnArgs} args - Arguments to update many ReminderSettings.
     * @example
     * // Update many ReminderSettings
     * const reminderSettings = await prisma.reminderSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReminderSettings and only return the `id`
     * const reminderSettingsWithIdOnly = await prisma.reminderSettings.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReminderSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, ReminderSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReminderSettings.
     * @param {ReminderSettingsUpsertArgs} args - Arguments to update or create a ReminderSettings.
     * @example
     * // Update or create a ReminderSettings
     * const reminderSettings = await prisma.reminderSettings.upsert({
     *   create: {
     *     // ... data to create a ReminderSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReminderSettings we want to update
     *   }
     * })
     */
    upsert<T extends ReminderSettingsUpsertArgs>(args: SelectSubset<T, ReminderSettingsUpsertArgs<ExtArgs>>): Prisma__ReminderSettingsClient<$Result.GetResult<Prisma.$ReminderSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReminderSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderSettingsCountArgs} args - Arguments to filter ReminderSettings to count.
     * @example
     * // Count the number of ReminderSettings
     * const count = await prisma.reminderSettings.count({
     *   where: {
     *     // ... the filter for the ReminderSettings we want to count
     *   }
     * })
    **/
    count<T extends ReminderSettingsCountArgs>(
      args?: Subset<T, ReminderSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReminderSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReminderSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReminderSettingsAggregateArgs>(args: Subset<T, ReminderSettingsAggregateArgs>): Prisma.PrismaPromise<GetReminderSettingsAggregateType<T>>

    /**
     * Group by ReminderSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderSettingsGroupByArgs} args - Group by arguments.
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
      T extends ReminderSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReminderSettingsGroupByArgs['orderBy'] }
        : { orderBy?: ReminderSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReminderSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReminderSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReminderSettings model
   */
  readonly fields: ReminderSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReminderSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReminderSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ReminderSettings model
   */
  interface ReminderSettingsFieldRefs {
    readonly id: FieldRef<"ReminderSettings", 'String'>
    readonly userId: FieldRef<"ReminderSettings", 'String'>
    readonly emailReminders: FieldRef<"ReminderSettings", 'Boolean'>
    readonly reminderTimeOffset: FieldRef<"ReminderSettings", 'Int'>
    readonly createdAt: FieldRef<"ReminderSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"ReminderSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReminderSettings findUnique
   */
  export type ReminderSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderSettings
     */
    select?: ReminderSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderSettings
     */
    omit?: ReminderSettingsOmit<ExtArgs> | null
    /**
     * Filter, which ReminderSettings to fetch.
     */
    where: ReminderSettingsWhereUniqueInput
  }

  /**
   * ReminderSettings findUniqueOrThrow
   */
  export type ReminderSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderSettings
     */
    select?: ReminderSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderSettings
     */
    omit?: ReminderSettingsOmit<ExtArgs> | null
    /**
     * Filter, which ReminderSettings to fetch.
     */
    where: ReminderSettingsWhereUniqueInput
  }

  /**
   * ReminderSettings findFirst
   */
  export type ReminderSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderSettings
     */
    select?: ReminderSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderSettings
     */
    omit?: ReminderSettingsOmit<ExtArgs> | null
    /**
     * Filter, which ReminderSettings to fetch.
     */
    where?: ReminderSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReminderSettings to fetch.
     */
    orderBy?: ReminderSettingsOrderByWithRelationInput | ReminderSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReminderSettings.
     */
    cursor?: ReminderSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReminderSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReminderSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReminderSettings.
     */
    distinct?: ReminderSettingsScalarFieldEnum | ReminderSettingsScalarFieldEnum[]
  }

  /**
   * ReminderSettings findFirstOrThrow
   */
  export type ReminderSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderSettings
     */
    select?: ReminderSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderSettings
     */
    omit?: ReminderSettingsOmit<ExtArgs> | null
    /**
     * Filter, which ReminderSettings to fetch.
     */
    where?: ReminderSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReminderSettings to fetch.
     */
    orderBy?: ReminderSettingsOrderByWithRelationInput | ReminderSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReminderSettings.
     */
    cursor?: ReminderSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReminderSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReminderSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReminderSettings.
     */
    distinct?: ReminderSettingsScalarFieldEnum | ReminderSettingsScalarFieldEnum[]
  }

  /**
   * ReminderSettings findMany
   */
  export type ReminderSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderSettings
     */
    select?: ReminderSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderSettings
     */
    omit?: ReminderSettingsOmit<ExtArgs> | null
    /**
     * Filter, which ReminderSettings to fetch.
     */
    where?: ReminderSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReminderSettings to fetch.
     */
    orderBy?: ReminderSettingsOrderByWithRelationInput | ReminderSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReminderSettings.
     */
    cursor?: ReminderSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReminderSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReminderSettings.
     */
    skip?: number
    distinct?: ReminderSettingsScalarFieldEnum | ReminderSettingsScalarFieldEnum[]
  }

  /**
   * ReminderSettings create
   */
  export type ReminderSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderSettings
     */
    select?: ReminderSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderSettings
     */
    omit?: ReminderSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a ReminderSettings.
     */
    data: XOR<ReminderSettingsCreateInput, ReminderSettingsUncheckedCreateInput>
  }

  /**
   * ReminderSettings createMany
   */
  export type ReminderSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReminderSettings.
     */
    data: ReminderSettingsCreateManyInput | ReminderSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReminderSettings createManyAndReturn
   */
  export type ReminderSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderSettings
     */
    select?: ReminderSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderSettings
     */
    omit?: ReminderSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many ReminderSettings.
     */
    data: ReminderSettingsCreateManyInput | ReminderSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReminderSettings update
   */
  export type ReminderSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderSettings
     */
    select?: ReminderSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderSettings
     */
    omit?: ReminderSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a ReminderSettings.
     */
    data: XOR<ReminderSettingsUpdateInput, ReminderSettingsUncheckedUpdateInput>
    /**
     * Choose, which ReminderSettings to update.
     */
    where: ReminderSettingsWhereUniqueInput
  }

  /**
   * ReminderSettings updateMany
   */
  export type ReminderSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReminderSettings.
     */
    data: XOR<ReminderSettingsUpdateManyMutationInput, ReminderSettingsUncheckedUpdateManyInput>
    /**
     * Filter which ReminderSettings to update
     */
    where?: ReminderSettingsWhereInput
    /**
     * Limit how many ReminderSettings to update.
     */
    limit?: number
  }

  /**
   * ReminderSettings updateManyAndReturn
   */
  export type ReminderSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderSettings
     */
    select?: ReminderSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderSettings
     */
    omit?: ReminderSettingsOmit<ExtArgs> | null
    /**
     * The data used to update ReminderSettings.
     */
    data: XOR<ReminderSettingsUpdateManyMutationInput, ReminderSettingsUncheckedUpdateManyInput>
    /**
     * Filter which ReminderSettings to update
     */
    where?: ReminderSettingsWhereInput
    /**
     * Limit how many ReminderSettings to update.
     */
    limit?: number
  }

  /**
   * ReminderSettings upsert
   */
  export type ReminderSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderSettings
     */
    select?: ReminderSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderSettings
     */
    omit?: ReminderSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the ReminderSettings to update in case it exists.
     */
    where: ReminderSettingsWhereUniqueInput
    /**
     * In case the ReminderSettings found by the `where` argument doesn't exist, create a new ReminderSettings with this data.
     */
    create: XOR<ReminderSettingsCreateInput, ReminderSettingsUncheckedCreateInput>
    /**
     * In case the ReminderSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReminderSettingsUpdateInput, ReminderSettingsUncheckedUpdateInput>
  }

  /**
   * ReminderSettings delete
   */
  export type ReminderSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderSettings
     */
    select?: ReminderSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderSettings
     */
    omit?: ReminderSettingsOmit<ExtArgs> | null
    /**
     * Filter which ReminderSettings to delete.
     */
    where: ReminderSettingsWhereUniqueInput
  }

  /**
   * ReminderSettings deleteMany
   */
  export type ReminderSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReminderSettings to delete
     */
    where?: ReminderSettingsWhereInput
    /**
     * Limit how many ReminderSettings to delete.
     */
    limit?: number
  }

  /**
   * ReminderSettings without action
   */
  export type ReminderSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderSettings
     */
    select?: ReminderSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderSettings
     */
    omit?: ReminderSettingsOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    hashedPassword: 'hashedPassword',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MedicationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    dosage: 'dosage',
    frequency: 'frequency',
    timeOfDay: 'timeOfDay',
    startDate: 'startDate',
    endDate: 'endDate',
    instructions: 'instructions',
    color: 'color',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type MedicationScalarFieldEnum = (typeof MedicationScalarFieldEnum)[keyof typeof MedicationScalarFieldEnum]


  export const MedicationLogScalarFieldEnum: {
    id: 'id',
    taken: 'taken',
    skipped: 'skipped',
    scheduledFor: 'scheduledFor',
    takenAt: 'takenAt',
    note: 'note',
    medicationId: 'medicationId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicationLogScalarFieldEnum = (typeof MedicationLogScalarFieldEnum)[keyof typeof MedicationLogScalarFieldEnum]


  export const ReminderSettingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    emailReminders: 'emailReminders',
    reminderTimeOffset: 'reminderTimeOffset',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReminderSettingsScalarFieldEnum = (typeof ReminderSettingsScalarFieldEnum)[keyof typeof ReminderSettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    hashedPassword?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    medications?: MedicationListRelationFilter
    medicationLogs?: MedicationLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medications?: MedicationOrderByRelationAggregateInput
    medicationLogs?: MedicationLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    hashedPassword?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    medications?: MedicationListRelationFilter
    medicationLogs?: MedicationLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
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
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    hashedPassword?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MedicationWhereInput = {
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    id?: StringFilter<"Medication"> | string
    name?: StringFilter<"Medication"> | string
    dosage?: StringFilter<"Medication"> | string
    frequency?: StringFilter<"Medication"> | string
    timeOfDay?: StringNullableListFilter<"Medication">
    startDate?: DateTimeFilter<"Medication"> | Date | string
    endDate?: DateTimeNullableFilter<"Medication"> | Date | string | null
    instructions?: StringNullableFilter<"Medication"> | string | null
    color?: StringNullableFilter<"Medication"> | string | null
    createdAt?: DateTimeFilter<"Medication"> | Date | string
    updatedAt?: DateTimeFilter<"Medication"> | Date | string
    userId?: StringFilter<"Medication"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    medicationLogs?: MedicationLogListRelationFilter
  }

  export type MedicationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    timeOfDay?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    instructions?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    medicationLogs?: MedicationLogOrderByRelationAggregateInput
  }

  export type MedicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    name?: StringFilter<"Medication"> | string
    dosage?: StringFilter<"Medication"> | string
    frequency?: StringFilter<"Medication"> | string
    timeOfDay?: StringNullableListFilter<"Medication">
    startDate?: DateTimeFilter<"Medication"> | Date | string
    endDate?: DateTimeNullableFilter<"Medication"> | Date | string | null
    instructions?: StringNullableFilter<"Medication"> | string | null
    color?: StringNullableFilter<"Medication"> | string | null
    createdAt?: DateTimeFilter<"Medication"> | Date | string
    updatedAt?: DateTimeFilter<"Medication"> | Date | string
    userId?: StringFilter<"Medication"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    medicationLogs?: MedicationLogListRelationFilter
  }, "id">

  export type MedicationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    timeOfDay?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    instructions?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: MedicationCountOrderByAggregateInput
    _max?: MedicationMaxOrderByAggregateInput
    _min?: MedicationMinOrderByAggregateInput
  }

  export type MedicationScalarWhereWithAggregatesInput = {
    AND?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    OR?: MedicationScalarWhereWithAggregatesInput[]
    NOT?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Medication"> | string
    name?: StringWithAggregatesFilter<"Medication"> | string
    dosage?: StringWithAggregatesFilter<"Medication"> | string
    frequency?: StringWithAggregatesFilter<"Medication"> | string
    timeOfDay?: StringNullableListFilter<"Medication">
    startDate?: DateTimeWithAggregatesFilter<"Medication"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Medication"> | Date | string | null
    instructions?: StringNullableWithAggregatesFilter<"Medication"> | string | null
    color?: StringNullableWithAggregatesFilter<"Medication"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Medication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Medication"> | Date | string
    userId?: StringWithAggregatesFilter<"Medication"> | string
  }

  export type MedicationLogWhereInput = {
    AND?: MedicationLogWhereInput | MedicationLogWhereInput[]
    OR?: MedicationLogWhereInput[]
    NOT?: MedicationLogWhereInput | MedicationLogWhereInput[]
    id?: StringFilter<"MedicationLog"> | string
    taken?: BoolFilter<"MedicationLog"> | boolean
    skipped?: BoolFilter<"MedicationLog"> | boolean
    scheduledFor?: DateTimeFilter<"MedicationLog"> | Date | string
    takenAt?: DateTimeFilter<"MedicationLog"> | Date | string
    note?: StringNullableFilter<"MedicationLog"> | string | null
    medicationId?: StringFilter<"MedicationLog"> | string
    userId?: StringFilter<"MedicationLog"> | string
    createdAt?: DateTimeFilter<"MedicationLog"> | Date | string
    updatedAt?: DateTimeFilter<"MedicationLog"> | Date | string
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MedicationLogOrderByWithRelationInput = {
    id?: SortOrder
    taken?: SortOrder
    skipped?: SortOrder
    scheduledFor?: SortOrder
    takenAt?: SortOrder
    note?: SortOrderInput | SortOrder
    medicationId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medication?: MedicationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MedicationLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicationLogWhereInput | MedicationLogWhereInput[]
    OR?: MedicationLogWhereInput[]
    NOT?: MedicationLogWhereInput | MedicationLogWhereInput[]
    taken?: BoolFilter<"MedicationLog"> | boolean
    skipped?: BoolFilter<"MedicationLog"> | boolean
    scheduledFor?: DateTimeFilter<"MedicationLog"> | Date | string
    takenAt?: DateTimeFilter<"MedicationLog"> | Date | string
    note?: StringNullableFilter<"MedicationLog"> | string | null
    medicationId?: StringFilter<"MedicationLog"> | string
    userId?: StringFilter<"MedicationLog"> | string
    createdAt?: DateTimeFilter<"MedicationLog"> | Date | string
    updatedAt?: DateTimeFilter<"MedicationLog"> | Date | string
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MedicationLogOrderByWithAggregationInput = {
    id?: SortOrder
    taken?: SortOrder
    skipped?: SortOrder
    scheduledFor?: SortOrder
    takenAt?: SortOrder
    note?: SortOrderInput | SortOrder
    medicationId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicationLogCountOrderByAggregateInput
    _max?: MedicationLogMaxOrderByAggregateInput
    _min?: MedicationLogMinOrderByAggregateInput
  }

  export type MedicationLogScalarWhereWithAggregatesInput = {
    AND?: MedicationLogScalarWhereWithAggregatesInput | MedicationLogScalarWhereWithAggregatesInput[]
    OR?: MedicationLogScalarWhereWithAggregatesInput[]
    NOT?: MedicationLogScalarWhereWithAggregatesInput | MedicationLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicationLog"> | string
    taken?: BoolWithAggregatesFilter<"MedicationLog"> | boolean
    skipped?: BoolWithAggregatesFilter<"MedicationLog"> | boolean
    scheduledFor?: DateTimeWithAggregatesFilter<"MedicationLog"> | Date | string
    takenAt?: DateTimeWithAggregatesFilter<"MedicationLog"> | Date | string
    note?: StringNullableWithAggregatesFilter<"MedicationLog"> | string | null
    medicationId?: StringWithAggregatesFilter<"MedicationLog"> | string
    userId?: StringWithAggregatesFilter<"MedicationLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MedicationLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MedicationLog"> | Date | string
  }

  export type ReminderSettingsWhereInput = {
    AND?: ReminderSettingsWhereInput | ReminderSettingsWhereInput[]
    OR?: ReminderSettingsWhereInput[]
    NOT?: ReminderSettingsWhereInput | ReminderSettingsWhereInput[]
    id?: StringFilter<"ReminderSettings"> | string
    userId?: StringFilter<"ReminderSettings"> | string
    emailReminders?: BoolFilter<"ReminderSettings"> | boolean
    reminderTimeOffset?: IntFilter<"ReminderSettings"> | number
    createdAt?: DateTimeFilter<"ReminderSettings"> | Date | string
    updatedAt?: DateTimeFilter<"ReminderSettings"> | Date | string
  }

  export type ReminderSettingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    emailReminders?: SortOrder
    reminderTimeOffset?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReminderSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ReminderSettingsWhereInput | ReminderSettingsWhereInput[]
    OR?: ReminderSettingsWhereInput[]
    NOT?: ReminderSettingsWhereInput | ReminderSettingsWhereInput[]
    emailReminders?: BoolFilter<"ReminderSettings"> | boolean
    reminderTimeOffset?: IntFilter<"ReminderSettings"> | number
    createdAt?: DateTimeFilter<"ReminderSettings"> | Date | string
    updatedAt?: DateTimeFilter<"ReminderSettings"> | Date | string
  }, "id" | "userId">

  export type ReminderSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    emailReminders?: SortOrder
    reminderTimeOffset?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReminderSettingsCountOrderByAggregateInput
    _avg?: ReminderSettingsAvgOrderByAggregateInput
    _max?: ReminderSettingsMaxOrderByAggregateInput
    _min?: ReminderSettingsMinOrderByAggregateInput
    _sum?: ReminderSettingsSumOrderByAggregateInput
  }

  export type ReminderSettingsScalarWhereWithAggregatesInput = {
    AND?: ReminderSettingsScalarWhereWithAggregatesInput | ReminderSettingsScalarWhereWithAggregatesInput[]
    OR?: ReminderSettingsScalarWhereWithAggregatesInput[]
    NOT?: ReminderSettingsScalarWhereWithAggregatesInput | ReminderSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReminderSettings"> | string
    userId?: StringWithAggregatesFilter<"ReminderSettings"> | string
    emailReminders?: BoolWithAggregatesFilter<"ReminderSettings"> | boolean
    reminderTimeOffset?: IntWithAggregatesFilter<"ReminderSettings"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ReminderSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReminderSettings"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    hashedPassword?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationCreateNestedManyWithoutUserInput
    medicationLogs?: MedicationLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    hashedPassword?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationUncheckedCreateNestedManyWithoutUserInput
    medicationLogs?: MedicationLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUpdateManyWithoutUserNestedInput
    medicationLogs?: MedicationLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUncheckedUpdateManyWithoutUserNestedInput
    medicationLogs?: MedicationLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    hashedPassword?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationCreateInput = {
    id?: string
    name: string
    dosage: string
    frequency: string
    timeOfDay?: MedicationCreatetimeOfDayInput | string[]
    startDate: Date | string
    endDate?: Date | string | null
    instructions?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMedicationsInput
    medicationLogs?: MedicationLogCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateInput = {
    id?: string
    name: string
    dosage: string
    frequency: string
    timeOfDay?: MedicationCreatetimeOfDayInput | string[]
    startDate: Date | string
    endDate?: Date | string | null
    instructions?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    medicationLogs?: MedicationLogUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    timeOfDay?: MedicationUpdatetimeOfDayInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMedicationsNestedInput
    medicationLogs?: MedicationLogUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    timeOfDay?: MedicationUpdatetimeOfDayInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    medicationLogs?: MedicationLogUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationCreateManyInput = {
    id?: string
    name: string
    dosage: string
    frequency: string
    timeOfDay?: MedicationCreatetimeOfDayInput | string[]
    startDate: Date | string
    endDate?: Date | string | null
    instructions?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type MedicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    timeOfDay?: MedicationUpdatetimeOfDayInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    timeOfDay?: MedicationUpdatetimeOfDayInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MedicationLogCreateInput = {
    id?: string
    taken?: boolean
    skipped?: boolean
    scheduledFor: Date | string
    takenAt?: Date | string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medication: MedicationCreateNestedOneWithoutMedicationLogsInput
    user: UserCreateNestedOneWithoutMedicationLogsInput
  }

  export type MedicationLogUncheckedCreateInput = {
    id?: string
    taken?: boolean
    skipped?: boolean
    scheduledFor: Date | string
    takenAt?: Date | string
    note?: string | null
    medicationId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
    skipped?: BoolFieldUpdateOperationsInput | boolean
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medication?: MedicationUpdateOneRequiredWithoutMedicationLogsNestedInput
    user?: UserUpdateOneRequiredWithoutMedicationLogsNestedInput
  }

  export type MedicationLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
    skipped?: BoolFieldUpdateOperationsInput | boolean
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    medicationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationLogCreateManyInput = {
    id?: string
    taken?: boolean
    skipped?: boolean
    scheduledFor: Date | string
    takenAt?: Date | string
    note?: string | null
    medicationId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
    skipped?: BoolFieldUpdateOperationsInput | boolean
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
    skipped?: BoolFieldUpdateOperationsInput | boolean
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    medicationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderSettingsCreateInput = {
    id?: string
    userId: string
    emailReminders?: boolean
    reminderTimeOffset?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReminderSettingsUncheckedCreateInput = {
    id?: string
    userId: string
    emailReminders?: boolean
    reminderTimeOffset?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReminderSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    emailReminders?: BoolFieldUpdateOperationsInput | boolean
    reminderTimeOffset?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    emailReminders?: BoolFieldUpdateOperationsInput | boolean
    reminderTimeOffset?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderSettingsCreateManyInput = {
    id?: string
    userId: string
    emailReminders?: boolean
    reminderTimeOffset?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReminderSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    emailReminders?: BoolFieldUpdateOperationsInput | boolean
    reminderTimeOffset?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    emailReminders?: BoolFieldUpdateOperationsInput | boolean
    reminderTimeOffset?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type MedicationListRelationFilter = {
    every?: MedicationWhereInput
    some?: MedicationWhereInput
    none?: MedicationWhereInput
  }

  export type MedicationLogListRelationFilter = {
    every?: MedicationLogWhereInput
    some?: MedicationLogWhereInput
    none?: MedicationLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MedicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicationLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    hashedPassword?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    hashedPassword?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    hashedPassword?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MedicationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    timeOfDay?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    instructions?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MedicationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    instructions?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MedicationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    instructions?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MedicationScalarRelationFilter = {
    is?: MedicationWhereInput
    isNot?: MedicationWhereInput
  }

  export type MedicationLogCountOrderByAggregateInput = {
    id?: SortOrder
    taken?: SortOrder
    skipped?: SortOrder
    scheduledFor?: SortOrder
    takenAt?: SortOrder
    note?: SortOrder
    medicationId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationLogMaxOrderByAggregateInput = {
    id?: SortOrder
    taken?: SortOrder
    skipped?: SortOrder
    scheduledFor?: SortOrder
    takenAt?: SortOrder
    note?: SortOrder
    medicationId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationLogMinOrderByAggregateInput = {
    id?: SortOrder
    taken?: SortOrder
    skipped?: SortOrder
    scheduledFor?: SortOrder
    takenAt?: SortOrder
    note?: SortOrder
    medicationId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ReminderSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    emailReminders?: SortOrder
    reminderTimeOffset?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReminderSettingsAvgOrderByAggregateInput = {
    reminderTimeOffset?: SortOrder
  }

  export type ReminderSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    emailReminders?: SortOrder
    reminderTimeOffset?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReminderSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    emailReminders?: SortOrder
    reminderTimeOffset?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReminderSettingsSumOrderByAggregateInput = {
    reminderTimeOffset?: SortOrder
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

  export type MedicationCreateNestedManyWithoutUserInput = {
    create?: XOR<MedicationCreateWithoutUserInput, MedicationUncheckedCreateWithoutUserInput> | MedicationCreateWithoutUserInput[] | MedicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutUserInput | MedicationCreateOrConnectWithoutUserInput[]
    createMany?: MedicationCreateManyUserInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type MedicationLogCreateNestedManyWithoutUserInput = {
    create?: XOR<MedicationLogCreateWithoutUserInput, MedicationLogUncheckedCreateWithoutUserInput> | MedicationLogCreateWithoutUserInput[] | MedicationLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationLogCreateOrConnectWithoutUserInput | MedicationLogCreateOrConnectWithoutUserInput[]
    createMany?: MedicationLogCreateManyUserInputEnvelope
    connect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
  }

  export type MedicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MedicationCreateWithoutUserInput, MedicationUncheckedCreateWithoutUserInput> | MedicationCreateWithoutUserInput[] | MedicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutUserInput | MedicationCreateOrConnectWithoutUserInput[]
    createMany?: MedicationCreateManyUserInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type MedicationLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MedicationLogCreateWithoutUserInput, MedicationLogUncheckedCreateWithoutUserInput> | MedicationLogCreateWithoutUserInput[] | MedicationLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationLogCreateOrConnectWithoutUserInput | MedicationLogCreateOrConnectWithoutUserInput[]
    createMany?: MedicationLogCreateManyUserInputEnvelope
    connect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MedicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedicationCreateWithoutUserInput, MedicationUncheckedCreateWithoutUserInput> | MedicationCreateWithoutUserInput[] | MedicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutUserInput | MedicationCreateOrConnectWithoutUserInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutUserInput | MedicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedicationCreateManyUserInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutUserInput | MedicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutUserInput | MedicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type MedicationLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedicationLogCreateWithoutUserInput, MedicationLogUncheckedCreateWithoutUserInput> | MedicationLogCreateWithoutUserInput[] | MedicationLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationLogCreateOrConnectWithoutUserInput | MedicationLogCreateOrConnectWithoutUserInput[]
    upsert?: MedicationLogUpsertWithWhereUniqueWithoutUserInput | MedicationLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedicationLogCreateManyUserInputEnvelope
    set?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    disconnect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    delete?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    connect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    update?: MedicationLogUpdateWithWhereUniqueWithoutUserInput | MedicationLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedicationLogUpdateManyWithWhereWithoutUserInput | MedicationLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedicationLogScalarWhereInput | MedicationLogScalarWhereInput[]
  }

  export type MedicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedicationCreateWithoutUserInput, MedicationUncheckedCreateWithoutUserInput> | MedicationCreateWithoutUserInput[] | MedicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutUserInput | MedicationCreateOrConnectWithoutUserInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutUserInput | MedicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedicationCreateManyUserInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutUserInput | MedicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutUserInput | MedicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type MedicationLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedicationLogCreateWithoutUserInput, MedicationLogUncheckedCreateWithoutUserInput> | MedicationLogCreateWithoutUserInput[] | MedicationLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationLogCreateOrConnectWithoutUserInput | MedicationLogCreateOrConnectWithoutUserInput[]
    upsert?: MedicationLogUpsertWithWhereUniqueWithoutUserInput | MedicationLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedicationLogCreateManyUserInputEnvelope
    set?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    disconnect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    delete?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    connect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    update?: MedicationLogUpdateWithWhereUniqueWithoutUserInput | MedicationLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedicationLogUpdateManyWithWhereWithoutUserInput | MedicationLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedicationLogScalarWhereInput | MedicationLogScalarWhereInput[]
  }

  export type MedicationCreatetimeOfDayInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutMedicationsInput = {
    create?: XOR<UserCreateWithoutMedicationsInput, UserUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedicationsInput
    connect?: UserWhereUniqueInput
  }

  export type MedicationLogCreateNestedManyWithoutMedicationInput = {
    create?: XOR<MedicationLogCreateWithoutMedicationInput, MedicationLogUncheckedCreateWithoutMedicationInput> | MedicationLogCreateWithoutMedicationInput[] | MedicationLogUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: MedicationLogCreateOrConnectWithoutMedicationInput | MedicationLogCreateOrConnectWithoutMedicationInput[]
    createMany?: MedicationLogCreateManyMedicationInputEnvelope
    connect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
  }

  export type MedicationLogUncheckedCreateNestedManyWithoutMedicationInput = {
    create?: XOR<MedicationLogCreateWithoutMedicationInput, MedicationLogUncheckedCreateWithoutMedicationInput> | MedicationLogCreateWithoutMedicationInput[] | MedicationLogUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: MedicationLogCreateOrConnectWithoutMedicationInput | MedicationLogCreateOrConnectWithoutMedicationInput[]
    createMany?: MedicationLogCreateManyMedicationInputEnvelope
    connect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
  }

  export type MedicationUpdatetimeOfDayInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutMedicationsNestedInput = {
    create?: XOR<UserCreateWithoutMedicationsInput, UserUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedicationsInput
    upsert?: UserUpsertWithoutMedicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMedicationsInput, UserUpdateWithoutMedicationsInput>, UserUncheckedUpdateWithoutMedicationsInput>
  }

  export type MedicationLogUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<MedicationLogCreateWithoutMedicationInput, MedicationLogUncheckedCreateWithoutMedicationInput> | MedicationLogCreateWithoutMedicationInput[] | MedicationLogUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: MedicationLogCreateOrConnectWithoutMedicationInput | MedicationLogCreateOrConnectWithoutMedicationInput[]
    upsert?: MedicationLogUpsertWithWhereUniqueWithoutMedicationInput | MedicationLogUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: MedicationLogCreateManyMedicationInputEnvelope
    set?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    disconnect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    delete?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    connect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    update?: MedicationLogUpdateWithWhereUniqueWithoutMedicationInput | MedicationLogUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: MedicationLogUpdateManyWithWhereWithoutMedicationInput | MedicationLogUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: MedicationLogScalarWhereInput | MedicationLogScalarWhereInput[]
  }

  export type MedicationLogUncheckedUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<MedicationLogCreateWithoutMedicationInput, MedicationLogUncheckedCreateWithoutMedicationInput> | MedicationLogCreateWithoutMedicationInput[] | MedicationLogUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: MedicationLogCreateOrConnectWithoutMedicationInput | MedicationLogCreateOrConnectWithoutMedicationInput[]
    upsert?: MedicationLogUpsertWithWhereUniqueWithoutMedicationInput | MedicationLogUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: MedicationLogCreateManyMedicationInputEnvelope
    set?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    disconnect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    delete?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    connect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    update?: MedicationLogUpdateWithWhereUniqueWithoutMedicationInput | MedicationLogUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: MedicationLogUpdateManyWithWhereWithoutMedicationInput | MedicationLogUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: MedicationLogScalarWhereInput | MedicationLogScalarWhereInput[]
  }

  export type MedicationCreateNestedOneWithoutMedicationLogsInput = {
    create?: XOR<MedicationCreateWithoutMedicationLogsInput, MedicationUncheckedCreateWithoutMedicationLogsInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutMedicationLogsInput
    connect?: MedicationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMedicationLogsInput = {
    create?: XOR<UserCreateWithoutMedicationLogsInput, UserUncheckedCreateWithoutMedicationLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedicationLogsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MedicationUpdateOneRequiredWithoutMedicationLogsNestedInput = {
    create?: XOR<MedicationCreateWithoutMedicationLogsInput, MedicationUncheckedCreateWithoutMedicationLogsInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutMedicationLogsInput
    upsert?: MedicationUpsertWithoutMedicationLogsInput
    connect?: MedicationWhereUniqueInput
    update?: XOR<XOR<MedicationUpdateToOneWithWhereWithoutMedicationLogsInput, MedicationUpdateWithoutMedicationLogsInput>, MedicationUncheckedUpdateWithoutMedicationLogsInput>
  }

  export type UserUpdateOneRequiredWithoutMedicationLogsNestedInput = {
    create?: XOR<UserCreateWithoutMedicationLogsInput, UserUncheckedCreateWithoutMedicationLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedicationLogsInput
    upsert?: UserUpsertWithoutMedicationLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMedicationLogsInput, UserUpdateWithoutMedicationLogsInput>, UserUncheckedUpdateWithoutMedicationLogsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type MedicationCreateWithoutUserInput = {
    id?: string
    name: string
    dosage: string
    frequency: string
    timeOfDay?: MedicationCreatetimeOfDayInput | string[]
    startDate: Date | string
    endDate?: Date | string | null
    instructions?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medicationLogs?: MedicationLogCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    dosage: string
    frequency: string
    timeOfDay?: MedicationCreatetimeOfDayInput | string[]
    startDate: Date | string
    endDate?: Date | string | null
    instructions?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medicationLogs?: MedicationLogUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationCreateOrConnectWithoutUserInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutUserInput, MedicationUncheckedCreateWithoutUserInput>
  }

  export type MedicationCreateManyUserInputEnvelope = {
    data: MedicationCreateManyUserInput | MedicationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MedicationLogCreateWithoutUserInput = {
    id?: string
    taken?: boolean
    skipped?: boolean
    scheduledFor: Date | string
    takenAt?: Date | string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medication: MedicationCreateNestedOneWithoutMedicationLogsInput
  }

  export type MedicationLogUncheckedCreateWithoutUserInput = {
    id?: string
    taken?: boolean
    skipped?: boolean
    scheduledFor: Date | string
    takenAt?: Date | string
    note?: string | null
    medicationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationLogCreateOrConnectWithoutUserInput = {
    where: MedicationLogWhereUniqueInput
    create: XOR<MedicationLogCreateWithoutUserInput, MedicationLogUncheckedCreateWithoutUserInput>
  }

  export type MedicationLogCreateManyUserInputEnvelope = {
    data: MedicationLogCreateManyUserInput | MedicationLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MedicationUpsertWithWhereUniqueWithoutUserInput = {
    where: MedicationWhereUniqueInput
    update: XOR<MedicationUpdateWithoutUserInput, MedicationUncheckedUpdateWithoutUserInput>
    create: XOR<MedicationCreateWithoutUserInput, MedicationUncheckedCreateWithoutUserInput>
  }

  export type MedicationUpdateWithWhereUniqueWithoutUserInput = {
    where: MedicationWhereUniqueInput
    data: XOR<MedicationUpdateWithoutUserInput, MedicationUncheckedUpdateWithoutUserInput>
  }

  export type MedicationUpdateManyWithWhereWithoutUserInput = {
    where: MedicationScalarWhereInput
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyWithoutUserInput>
  }

  export type MedicationScalarWhereInput = {
    AND?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
    OR?: MedicationScalarWhereInput[]
    NOT?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
    id?: StringFilter<"Medication"> | string
    name?: StringFilter<"Medication"> | string
    dosage?: StringFilter<"Medication"> | string
    frequency?: StringFilter<"Medication"> | string
    timeOfDay?: StringNullableListFilter<"Medication">
    startDate?: DateTimeFilter<"Medication"> | Date | string
    endDate?: DateTimeNullableFilter<"Medication"> | Date | string | null
    instructions?: StringNullableFilter<"Medication"> | string | null
    color?: StringNullableFilter<"Medication"> | string | null
    createdAt?: DateTimeFilter<"Medication"> | Date | string
    updatedAt?: DateTimeFilter<"Medication"> | Date | string
    userId?: StringFilter<"Medication"> | string
  }

  export type MedicationLogUpsertWithWhereUniqueWithoutUserInput = {
    where: MedicationLogWhereUniqueInput
    update: XOR<MedicationLogUpdateWithoutUserInput, MedicationLogUncheckedUpdateWithoutUserInput>
    create: XOR<MedicationLogCreateWithoutUserInput, MedicationLogUncheckedCreateWithoutUserInput>
  }

  export type MedicationLogUpdateWithWhereUniqueWithoutUserInput = {
    where: MedicationLogWhereUniqueInput
    data: XOR<MedicationLogUpdateWithoutUserInput, MedicationLogUncheckedUpdateWithoutUserInput>
  }

  export type MedicationLogUpdateManyWithWhereWithoutUserInput = {
    where: MedicationLogScalarWhereInput
    data: XOR<MedicationLogUpdateManyMutationInput, MedicationLogUncheckedUpdateManyWithoutUserInput>
  }

  export type MedicationLogScalarWhereInput = {
    AND?: MedicationLogScalarWhereInput | MedicationLogScalarWhereInput[]
    OR?: MedicationLogScalarWhereInput[]
    NOT?: MedicationLogScalarWhereInput | MedicationLogScalarWhereInput[]
    id?: StringFilter<"MedicationLog"> | string
    taken?: BoolFilter<"MedicationLog"> | boolean
    skipped?: BoolFilter<"MedicationLog"> | boolean
    scheduledFor?: DateTimeFilter<"MedicationLog"> | Date | string
    takenAt?: DateTimeFilter<"MedicationLog"> | Date | string
    note?: StringNullableFilter<"MedicationLog"> | string | null
    medicationId?: StringFilter<"MedicationLog"> | string
    userId?: StringFilter<"MedicationLog"> | string
    createdAt?: DateTimeFilter<"MedicationLog"> | Date | string
    updatedAt?: DateTimeFilter<"MedicationLog"> | Date | string
  }

  export type UserCreateWithoutMedicationsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    hashedPassword?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medicationLogs?: MedicationLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMedicationsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    hashedPassword?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medicationLogs?: MedicationLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMedicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMedicationsInput, UserUncheckedCreateWithoutMedicationsInput>
  }

  export type MedicationLogCreateWithoutMedicationInput = {
    id?: string
    taken?: boolean
    skipped?: boolean
    scheduledFor: Date | string
    takenAt?: Date | string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMedicationLogsInput
  }

  export type MedicationLogUncheckedCreateWithoutMedicationInput = {
    id?: string
    taken?: boolean
    skipped?: boolean
    scheduledFor: Date | string
    takenAt?: Date | string
    note?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationLogCreateOrConnectWithoutMedicationInput = {
    where: MedicationLogWhereUniqueInput
    create: XOR<MedicationLogCreateWithoutMedicationInput, MedicationLogUncheckedCreateWithoutMedicationInput>
  }

  export type MedicationLogCreateManyMedicationInputEnvelope = {
    data: MedicationLogCreateManyMedicationInput | MedicationLogCreateManyMedicationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMedicationsInput = {
    update: XOR<UserUpdateWithoutMedicationsInput, UserUncheckedUpdateWithoutMedicationsInput>
    create: XOR<UserCreateWithoutMedicationsInput, UserUncheckedCreateWithoutMedicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMedicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMedicationsInput, UserUncheckedUpdateWithoutMedicationsInput>
  }

  export type UserUpdateWithoutMedicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicationLogs?: MedicationLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMedicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicationLogs?: MedicationLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MedicationLogUpsertWithWhereUniqueWithoutMedicationInput = {
    where: MedicationLogWhereUniqueInput
    update: XOR<MedicationLogUpdateWithoutMedicationInput, MedicationLogUncheckedUpdateWithoutMedicationInput>
    create: XOR<MedicationLogCreateWithoutMedicationInput, MedicationLogUncheckedCreateWithoutMedicationInput>
  }

  export type MedicationLogUpdateWithWhereUniqueWithoutMedicationInput = {
    where: MedicationLogWhereUniqueInput
    data: XOR<MedicationLogUpdateWithoutMedicationInput, MedicationLogUncheckedUpdateWithoutMedicationInput>
  }

  export type MedicationLogUpdateManyWithWhereWithoutMedicationInput = {
    where: MedicationLogScalarWhereInput
    data: XOR<MedicationLogUpdateManyMutationInput, MedicationLogUncheckedUpdateManyWithoutMedicationInput>
  }

  export type MedicationCreateWithoutMedicationLogsInput = {
    id?: string
    name: string
    dosage: string
    frequency: string
    timeOfDay?: MedicationCreatetimeOfDayInput | string[]
    startDate: Date | string
    endDate?: Date | string | null
    instructions?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMedicationsInput
  }

  export type MedicationUncheckedCreateWithoutMedicationLogsInput = {
    id?: string
    name: string
    dosage: string
    frequency: string
    timeOfDay?: MedicationCreatetimeOfDayInput | string[]
    startDate: Date | string
    endDate?: Date | string | null
    instructions?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type MedicationCreateOrConnectWithoutMedicationLogsInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutMedicationLogsInput, MedicationUncheckedCreateWithoutMedicationLogsInput>
  }

  export type UserCreateWithoutMedicationLogsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    hashedPassword?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMedicationLogsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    hashedPassword?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMedicationLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMedicationLogsInput, UserUncheckedCreateWithoutMedicationLogsInput>
  }

  export type MedicationUpsertWithoutMedicationLogsInput = {
    update: XOR<MedicationUpdateWithoutMedicationLogsInput, MedicationUncheckedUpdateWithoutMedicationLogsInput>
    create: XOR<MedicationCreateWithoutMedicationLogsInput, MedicationUncheckedCreateWithoutMedicationLogsInput>
    where?: MedicationWhereInput
  }

  export type MedicationUpdateToOneWithWhereWithoutMedicationLogsInput = {
    where?: MedicationWhereInput
    data: XOR<MedicationUpdateWithoutMedicationLogsInput, MedicationUncheckedUpdateWithoutMedicationLogsInput>
  }

  export type MedicationUpdateWithoutMedicationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    timeOfDay?: MedicationUpdatetimeOfDayInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMedicationsNestedInput
  }

  export type MedicationUncheckedUpdateWithoutMedicationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    timeOfDay?: MedicationUpdatetimeOfDayInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutMedicationLogsInput = {
    update: XOR<UserUpdateWithoutMedicationLogsInput, UserUncheckedUpdateWithoutMedicationLogsInput>
    create: XOR<UserCreateWithoutMedicationLogsInput, UserUncheckedCreateWithoutMedicationLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMedicationLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMedicationLogsInput, UserUncheckedUpdateWithoutMedicationLogsInput>
  }

  export type UserUpdateWithoutMedicationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMedicationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MedicationCreateManyUserInput = {
    id?: string
    name: string
    dosage: string
    frequency: string
    timeOfDay?: MedicationCreatetimeOfDayInput | string[]
    startDate: Date | string
    endDate?: Date | string | null
    instructions?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationLogCreateManyUserInput = {
    id?: string
    taken?: boolean
    skipped?: boolean
    scheduledFor: Date | string
    takenAt?: Date | string
    note?: string | null
    medicationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    timeOfDay?: MedicationUpdatetimeOfDayInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicationLogs?: MedicationLogUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    timeOfDay?: MedicationUpdatetimeOfDayInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicationLogs?: MedicationLogUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    timeOfDay?: MedicationUpdatetimeOfDayInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
    skipped?: BoolFieldUpdateOperationsInput | boolean
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medication?: MedicationUpdateOneRequiredWithoutMedicationLogsNestedInput
  }

  export type MedicationLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
    skipped?: BoolFieldUpdateOperationsInput | boolean
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    medicationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
    skipped?: BoolFieldUpdateOperationsInput | boolean
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    medicationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationLogCreateManyMedicationInput = {
    id?: string
    taken?: boolean
    skipped?: boolean
    scheduledFor: Date | string
    takenAt?: Date | string
    note?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationLogUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
    skipped?: BoolFieldUpdateOperationsInput | boolean
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMedicationLogsNestedInput
  }

  export type MedicationLogUncheckedUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
    skipped?: BoolFieldUpdateOperationsInput | boolean
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationLogUncheckedUpdateManyWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
    skipped?: BoolFieldUpdateOperationsInput | boolean
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
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