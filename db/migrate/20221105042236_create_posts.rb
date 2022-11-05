class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    enable_extension "pgcrypto"

    create_table :posts do |t|
      t.uuid :uuid, null: false, index: true, default: "gen_random_uuid()"
      t.string :title
      t.text :body

      t.timestamps
    end
  end
end
