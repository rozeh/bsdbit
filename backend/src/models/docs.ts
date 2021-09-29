import { DataTypes, Model } from 'sequelize';

class Docs {
  private model: Model;

  constructor(sequelize: any) {
    this.model = sequelize.define(
      'docs',
      {
        reservId: {
          field: 'docs_id',
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        title: {
          field: 'title',
          type: DataTypes.STRING,
          allowNull: false
        },
        content: {
          field: 'content',
          type: DataTypes.STRING,
          allowNull: false
        },
        docsuser: {
          field: 'docsuser',
          type: DataTypes.STRING,
          allowNull: false
        },
        phoneNum: {
          field: 'phoneNum',
          type: DataTypes.STRING,
          allowNull: false
        },
        boardId: {
            field: 'board_id',
            type: DataTypes.STRING,
            allowNull: false
        },
        createdDate: {
          field: 'created_date',
          type: 'TIMESTAMP',
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }
      },
      {
        tableName: 'docs',
        timestamps: true,
      }
    )
  }

  getModel(): Model {
    return this.model;
  }
}

export default Docs;