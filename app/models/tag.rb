class Tag < ApplicationRecord
    has_many :tasks
    
    validates :name, presence: true, uniqueness: {message: "is already created"}, length: {maximum: 20}
end
