import { wxp } from "base";

// interface TableResponse<T> {
//     value: T[]
// }
const BaseUrl = "https://bibles.table.core.chinacloudapi.cn/";
const SignString = "?sv=2017-07-29&ss=t&srt=o&sp=r&se=2118-05-31T13:23:05Z&st=2018-05-31T05:23:05Z&spr=https&sig=sHfMlVbPQIhtdPBxWkpM6GGEi7D3QsNXwFwSkvEB79A%3D";


// let _client = axios.create({
//     baseURL: BaseUrl,
//     timeout: 1000,
//     headers: { 'Accept': 'application/json;odata=nometadata' }
// });

export async function GetOne <T>(tableName: string, partitionKey: string, rowKey: string, select: string) {
    var url = `${tableName}${SignString}&$filter=PartitionKey%20eq%20'${partitionKey}'%20and%20RowKey%20eq%20'${rowKey}'&$select=${select}`;
    //let response = await _client.get<TableResponse<T>>(url);

    let response = await wxp.request({
        url: BaseUrl + url,
        header:{ 'Accept': 'application/json;odata=nometadata' },
    });
    return response.data.value[0] as T;
}
export async function GetList <T>(tableName: string, partitionKey: string, select: string) {
    var url = `${tableName}${SignString}&$filter=PartitionKey%20eq%20'${partitionKey}'&$select=${select}`;
    //let response = await _client.get<TableResponse<T>>(url);
    let response = await wxp.request({
        url: BaseUrl + url,
        header:{ 'Accept': 'application/json;odata=nometadata' },
    });
    return response.data.value as T[];
}
