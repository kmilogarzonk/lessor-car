module Api
  module V1
    class PublicController < BaseController

      skip_before_action :verify_authenticity_token

      #Lessor

      def createlessor
        data = params.to_h
        data[:validate_fn] = "createlessor"
        render json: LessorService.new(data).createlessor
      end

      def updatedatalessor
        data = params.to_h
        data[:validate_fn] = "updatedatalessor"
        render json: LessorService.new(data).updatedatalessor
      end

      def droplessor
        data = params.to_h
        data[:validate_fn] = "droplessor"
        render json: LessorService.new(data).droplessor
      end

      private

      def params
        params.permit(:property_card, :licency, :address, :plaque, :registration_number, :user_uid)
      end

    end
  end
end
