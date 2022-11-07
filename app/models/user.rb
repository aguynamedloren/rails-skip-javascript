# frozen_string_literal: true

class User < ActiveRecord::Base
  devise :database_authenticatable, :validatable
  include GraphqlDevise::Authenticatable
end
