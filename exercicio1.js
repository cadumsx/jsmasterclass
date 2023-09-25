// input:
// create table author (id number, name string, age number, city string, state string, country string)

// output:
// tableName = "author"
// columns = [ 'id number',' name string',' age number',' city string',' state string',' country string']

const sComando = 'create table author (id number, name string, age number, city string, state string, country string)';
const regexpTableName = /table (?<tablename>\w+) \((?<columns>.+)\)/;
const sTableName = sComando.match(regexpTableName).groups.tablename;
const aColumns = sComando.match(regexpTableName).groups.columns.split(',');
aColumns.forEach(function(item,indice) {
    aColumns[indice] = item.trim();
});
console.log(`tablename: ${sTableName}`);
console.log(`Colunas: ${aColumns}`);
