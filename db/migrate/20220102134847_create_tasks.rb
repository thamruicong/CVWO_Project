class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.integer :tag_id
      t.date :date
      t.time :time
      t.boolean :completed, default: false
      t.timestamps
    end
  end
end
