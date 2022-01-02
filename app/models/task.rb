class Task < ApplicationRecord
    belongs_to :tag

    validates :title, presence: true, uniqueness: {message: "is already taken"}, length: {within: 5..30}
    validates :tag_id, numericality: {only_integers: true, allow_nil: true}
end
