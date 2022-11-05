class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.uuid :uuid, null: false, index: true, default: "gen_random_uuid()"
      t.text :text
      t.references :post, null: false, foreign_key: true

      t.timestamps
    end
  end
end
