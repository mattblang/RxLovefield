import * as lf from 'lf';
import { Observable } from 'rxjs';

let rxlf = {
    schema: {
        Builder: (schemaBuilder: lf.schema.Builder) => {
            return {}
        }
    }
};

export class RxLovefield {
    public static connect(schemaBuilder: lf.schema.Builder, options: lf.schema.ConnectOptions): Observable<lf.Database> {
        return Observable.fromPromise(schemaBuilder.connect(options));
    }   

}