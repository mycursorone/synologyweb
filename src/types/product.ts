// 产品基本信息类型
export interface Product {
  id: string;
  name: string;
  description: string | null;
  cover_image: string | null;
  spec_pdf_url: string | null;
  is_active: boolean;
  description_i18N: Record<string, any> | null;
  software_space: Record<string, any> | null;
  hardware_space: Record<string, any> | null;
  created_at: string;
  updated_at: string;
}

// 产品硬件规格类型
export interface ProductHardware {
  id: string;
  products_id: string;
  controller_count: number | null;
  cpu_model: string | null;
  cpu_count: number | null;
  cpu_cores: number | null;
  cpu_architecture: string | null;
  cpu_base_clock: number | null;
  cpu_turbo_clock: number | null;
  hardware_encryption: string | null;
  memory_total: string | null;
  memory_installed: string | null;
  memory_slots: number | null;
  memory_max: Record<string, any> | null;
  disk_bays: number | null;
  disk_bays_max: number | null;
  disk_types_supported: string[] | null;
  m2_slot: boolean | null;
  disk_host_swappable: boolean | null;
  lan_rj45_1G: number | null;
  lan_rj45_2_5G: number | null;
  lan_rj45_10G: number | null;
  management_prot: boolean | null;
  max_lax_ports: number | null;
  usb_3_2_prots: number | null;
  expansion_ports: number | null;
  expansion_port_types: string | null;
  pcie_expansion: string | null;
  chassis_type: string | null;
  dimensions: string | null;
  rack_mount_kit: string | null;
  fan_size: string | null;
  fan_replaceable: boolean | null;
  led_brightness_adj: boolean | null;
  auto_power_recovery: boolean | null;
  noise_lenel: string | null;
  scheduled_power: boolean | null;
  wake_on_lan: boolean | null;
  dual_power_supply: boolean | null;
  ac_input_voltage: string | null;
  frequency: string | null;
  power_consumption: string | null;
  working_temperature: string | null;
  storage_temperature: string | null;
  relative_humidity: string | null;
  certifications: string[] | null;
  warranty: string | null;
  environmental_compliance: string | null;
  package_contents: string[] | null;
  optional_accessories: string[] | null;
  cpu_threads: number | null;
}

// 标签分类类型
export interface TagCategory {
  id: string;
  name: string;
  sort: number | null;
  categories_type: string | null;
}

// 标签类型
export interface Tag {
  id: string;
  created_id: string;
  product_spec: string | null;
  product_size: string | null;
  sort_type: number | null;
  sort_order: number | null;
  spec_size: string | null;
}

// 产品标签关联类型
export interface ProductTag {
  product_id: string;
  tag_id: string;
  product_name: string | null;
  tag_spec: string | null;
  tag_size: string | null;
}

// 筛选请求参数类型
export interface ProductFilterParams {
  categoryIds?: string[];
  tagIds?: string[];
  searchTerm?: string;
  isActive?: boolean;
  page?: number;
  limit?: number;
}

// 筛选选项类型（前端使用）
export interface FilterOption {
  id: string;
  name: string;
  checked: boolean;
}

// 筛选分类类型（前端使用）
export interface FilterCategory {
  id: string;
  name: string;
  type: string | null;
  sort: number | null;
  options: FilterOption[];
}
