module.exports = (sequelize, dataTypes)=> {
    let alias ='Brand';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },

    };
    let config = {

        tableName: 'brand',
        timestamps : false,
        underscored: true
    }

const Brand = sequelize.define(alias,cols,config);

//Asociacion

Brand.associate = function(models){
    Brand.hasMany(models.Products,{
        as: 'products',
        foreignKey: 'brand_id'

    });
}
return Brand;
};