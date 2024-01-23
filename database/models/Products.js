module.exports = (sequelize,dataTypes)=> {
    let alias ='Products';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        }, 
        price: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        brand_id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: true
        },
        material_id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: true
        },
        color_id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: true
        },

    };
    let config = {

        tableName: 'products',
        timestamps : false,
        underscored: true
    }

const Products = sequelize.define(alias,cols,config);

//Asociacion

Products.associate = function(models){
    Products.belongsTo(models.Brand,{
        as:'brand',
        foreignKey: 'brand_id'

    });
    Products.belongsTo(models.Material,{
        as:'material',
        foreignKey: 'material_id'

    });
    Products.belongsTo(models.Color,{
        as:'color',
        foreignKey: 'color_id'

    });
    Products.hasMany(models.Images,{
        as:'images',
        foreignKey: 'product_id'

    });
}
return Products;
};