# == Schema Information
#
# Table name: benches
#
#  id          :bigint           not null, primary key
#  description :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Bench < ApplicationRecord 
    validates :description, :lat, :lng, presence: true 

    def self.in_bounds(bounds)
        # google map bounds will be in the following format:
        # {
        #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
        #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
        # }
        nElat = bounds['northEast']['lat']
        sWlat = bounds['southWest']['lat']
        nElng = bounds['northEast']['lng']
        sWlng = bounds['southWest']['lng']
        Bench
            .select(:id, :description, :lat, :lng)
            .where(lat: sWlat..nElat)
            .where(lng: sWlng..nElng)
    end
end
