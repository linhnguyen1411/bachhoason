puts "Create role"
Role.destroy_all
Role.create! name: "Admin", description: "Quản trị viên website"
Role.create! name: "Owner", description: "Giám đốc"
Role.create! name: "Branch Owner", description: "Trưởng chi nhánh"
Role.create! name: "Employee", description: "Nhân viên"

puts "Create dummy Admin"
Admin.destroy_all
Admin.create! name: "Linh Nguyen", email: "linhnguyen1411@gmail.com", password: "123123", password_confirmation: "123123", role_id: 1
Admin.create! name: "Nam Dao", email: "namdao1996@gmail.com", password: "123123", password_confirmation: "123123", role_id: 2
Admin.create! name: "Tuan Anh", email: "tuananh@gmail.com", password: "123123", password_confirmation: "123123", role_id: 3
Admin.create! name: "Employee", email: "employee@gmail.com", password: "123123", password_confirmation: "123123", role_id: 4

puts "Create Branch"
Branch.destroy_all
Branch.create! name: "Đại lý sơn Lee Sin", admin_id: 1, address: "01 Canada - Da Nang", phone: "099999999"
Branch.create! name: "Đại lý sơn Leblanc", admin_id: 2, address: "01 Truong Sa - Tam ky", phone: "099999999"
Branch.create! name: "Đại lý sơn Xinzhao", admin_id: 3, address: "01 Hoang Sa - Hoi An", phone: "099999999"
Branch.create! name: "Đại lý sơn Lucian", admin_id: 4, address: "01 Obama - Ha Noi", phone: "099999999"


puts "Create Provider"
Provider.destroy_all
Provider.create! name: "Dulux"
Provider.create! name: "Maxilite"
Provider.create! name: "Kova"
Provider.create! name: "Expo"
Provider.create! name: "Mykolor"
Provider.create! name: "Spec"
Provider.create! name: "Boss"
Provider.create! name: "Joton"
Provider.create! name: "Jotun"
Provider.create! name: "Toa"

puts "Create Catalog"
Catalog.destroy_all
Catalog.create! name: "Sơn chống thấm"
Catalog.create! name: "Sơn dầu"
Catalog.create! name: "Sơn nước"
Catalog.create! name: "Sơn nước nội thất", parent_id: 3
Catalog.create! name: "Sơn nước ngoại thất", parent_id: 3
Catalog.create! name: "Sơn giá rẻ"
Catalog.create! name: "Sơn chịu nhiệt"
Catalog.create! name: "Sơn chống rỉ"
Catalog.create! name: "Sơn công nghiệp"

puts "Create provider detail"
ProviderDetail.destroy_all
ProviderDetail.create provider_id: 1, catalog_id: 1
ProviderDetail.create provider_id: 1, catalog_id: 2
ProviderDetail.create provider_id: 1, catalog_id: 4
ProviderDetail.create provider_id: 1, catalog_id: 5
ProviderDetail.create provider_id: 1, catalog_id: 6

ProviderDetail.create provider_id: 2, catalog_id: 3
ProviderDetail.create provider_id: 2, catalog_id: 4
ProviderDetail.create provider_id: 2, catalog_id: 5
ProviderDetail.create provider_id: 2, catalog_id: 6
ProviderDetail.create provider_id: 2, catalog_id: 7

ProviderDetail.create provider_id: 3, catalog_id: 1
ProviderDetail.create provider_id: 3, catalog_id: 4
ProviderDetail.create provider_id: 3, catalog_id: 5
ProviderDetail.create provider_id: 3, catalog_id: 6
ProviderDetail.create provider_id: 3, catalog_id: 7

ProviderDetail.create provider_id: 4, catalog_id: 6
ProviderDetail.create provider_id: 4, catalog_id: 7

ProviderDetail.create provider_id: 5, catalog_id: 5
ProviderDetail.create provider_id: 5, catalog_id: 7

ProviderDetail.create provider_id: 6, catalog_id: 6
ProviderDetail.create provider_id: 6, catalog_id: 7

ProviderDetail.create provider_id: 7, catalog_id: 2
ProviderDetail.create provider_id: 7, catalog_id: 4

ProviderDetail.create provider_id: 8, catalog_id: 1
ProviderDetail.create provider_id: 8, catalog_id: 2

ProviderDetail.create provider_id: 9, catalog_id: 2
ProviderDetail.create provider_id: 9, catalog_id: 5

ProviderDetail.create provider_id: 10, catalog_id: 1
ProviderDetail.create provider_id: 10, catalog_id: 3


puts "create categories"
(1..100).each do |i|
  Category.create! name: "category_#{i}"
end

puts "create catalogs"
(1..100).each do |i|
  Catalog.create! name: "Catalog_#{i}"
end
