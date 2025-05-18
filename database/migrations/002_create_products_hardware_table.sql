-- Migration: Create products_hardware table
-- Description: Creates the products_hardware table based on Supabase structure
-- Created at: $(date +"%Y-%m-%d %H:%M:%S")

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop existing table if exists
DROP TABLE IF EXISTS products_hardware;

-- Create products_hardware table
CREATE TABLE IF NOT EXISTS products_hardware (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  products_id UUID NOT NULL DEFAULT gen_random_uuid(),
  controller_count SMALLINT,
  cpu_model VARCHAR,
  cpu_count SMALLINT,
  cpu_cores SMALLINT,
  cpu_architecture VARCHAR,
  cpu_base_clock NUMERIC,
  cpu_turbo_clock NUMERIC,
  hardware_encryption VARCHAR,
  memory_total VARCHAR,
  memory_installed VARCHAR,
  memory_slots SMALLINT,
  memory_max JSONB,
  disk_bays SMALLINT,
  disk_bays_max SMALLINT,
  disk_types_supported JSONB,
  m2_slot BOOLEAN,
  disk_host_swappable BOOLEAN,
  "lan_rj45_1G" SMALLINT,
  "lan_rj45-2.5G" SMALLINT,
  "lan_rj45_10G" SMALLINT,
  management_prot BOOLEAN,
  max_lax_ports SMALLINT,
  "usb_3.2_prots" SMALLINT,
  expansion_ports SMALLINT,
  expansion_port_types VARCHAR,
  pcie_expansion VARCHAR,
  chassis_type VARCHAR,
  dimensions VARCHAR,
  rack_mount_kit VARCHAR,
  fan_size VARCHAR,
  fan_replaceable BOOLEAN,
  led_brightness_adj BOOLEAN,
  auto_power_recovery BOOLEAN,
  noise_lenel VARCHAR,
  scheduled_power BOOLEAN,
  wake_on_lan BOOLEAN,
  dual_power_supply BOOLEAN,
  ac_input_voltage VARCHAR,
  frequency VARCHAR,
  power_consumption VARCHAR,
  working_temperature VARCHAR,
  storage_temperature VARCHAR,
  relative_humidity VARCHAR,
  certifications JSONB,
  warranty VARCHAR,
  environmental_compliance VARCHAR,
  package_contents JSONB,
  optional_accessories JSONB,
  cpu_threads SMALLINT,
  FOREIGN KEY (products_id) REFERENCES products(id)
);

-- Add comments
COMMENT ON TABLE products_hardware IS '产品硬件规格表';
COMMENT ON COLUMN products_hardware.id IS '硬件规格唯一标识符';
COMMENT ON COLUMN products_hardware.products_id IS '关联的产品ID';
COMMENT ON COLUMN products_hardware.controller_count IS '控制器数量';
COMMENT ON COLUMN products_hardware.cpu_model IS 'CPU型号';
COMMENT ON COLUMN products_hardware.cpu_count IS 'CPU数量';
COMMENT ON COLUMN products_hardware.cpu_cores IS 'CPU核心数';
COMMENT ON COLUMN products_hardware.cpu_architecture IS 'CPU架构';
COMMENT ON COLUMN products_hardware.cpu_base_clock IS 'CPU基础频率';
COMMENT ON COLUMN products_hardware.cpu_turbo_clock IS 'CPU加速频率';
COMMENT ON COLUMN products_hardware.hardware_encryption IS '硬件加密';
COMMENT ON COLUMN products_hardware.memory_total IS '内存总量';
COMMENT ON COLUMN products_hardware.memory_installed IS '已安装内存';
COMMENT ON COLUMN products_hardware.memory_slots IS '内存插槽数量';
COMMENT ON COLUMN products_hardware.memory_max IS '最大内存配置(JSON格式)';
COMMENT ON COLUMN products_hardware.disk_bays IS '硬盘槽位数';
COMMENT ON COLUMN products_hardware.disk_bays_max IS '最大硬盘槽位数';
COMMENT ON COLUMN products_hardware.disk_types_supported IS '支持的硬盘类型(JSON格式)';
COMMENT ON COLUMN products_hardware.m2_slot IS '是否有M.2插槽';
COMMENT ON COLUMN products_hardware.disk_host_swappable IS '是否支持热插拔';
COMMENT ON COLUMN products_hardware."lan_rj45_1G" IS '1G网口数量';
COMMENT ON COLUMN products_hardware."lan_rj45-2.5G" IS '2.5G网口数量';
COMMENT ON COLUMN products_hardware."lan_rj45_10G" IS '10G网口数量';
COMMENT ON COLUMN products_hardware.management_prot IS '是否有管理端口';
COMMENT ON COLUMN products_hardware.max_lax_ports IS '最大LAN端口数';
COMMENT ON COLUMN products_hardware."usb_3.2_prots" IS 'USB 3.2端口数量';
COMMENT ON COLUMN products_hardware.expansion_ports IS '扩展端口数量';
COMMENT ON COLUMN products_hardware.expansion_port_types IS '扩展端口类型';
COMMENT ON COLUMN products_hardware.pcie_expansion IS 'PCIe扩展';
COMMENT ON COLUMN products_hardware.chassis_type IS '机箱类型';
COMMENT ON COLUMN products_hardware.dimensions IS '尺寸';
COMMENT ON COLUMN products_hardware.rack_mount_kit IS '机架安装套件';
COMMENT ON COLUMN products_hardware.fan_size IS '风扇尺寸';
COMMENT ON COLUMN products_hardware.fan_replaceable IS '风扇是否可更换';
COMMENT ON COLUMN products_hardware.led_brightness_adj IS 'LED亮度是否可调';
COMMENT ON COLUMN products_hardware.auto_power_recovery IS '是否支持自动电源恢复';
COMMENT ON COLUMN products_hardware.noise_lenel IS '噪音级别';
COMMENT ON COLUMN products_hardware.scheduled_power IS '是否支持定时电源';
COMMENT ON COLUMN products_hardware.wake_on_lan IS '是否支持网络唤醒';
COMMENT ON COLUMN products_hardware.dual_power_supply IS '是否双电源';
COMMENT ON COLUMN products_hardware.ac_input_voltage IS '交流输入电压';
COMMENT ON COLUMN products_hardware.frequency IS '频率';
COMMENT ON COLUMN products_hardware.power_consumption IS '功耗';
COMMENT ON COLUMN products_hardware.working_temperature IS '工作温度';
COMMENT ON COLUMN products_hardware.storage_temperature IS '存储温度';
COMMENT ON COLUMN products_hardware.relative_humidity IS '相对湿度';
COMMENT ON COLUMN products_hardware.certifications IS '认证(JSON格式)';
COMMENT ON COLUMN products_hardware.warranty IS '保修';
COMMENT ON COLUMN products_hardware.environmental_compliance IS '环保合规';
COMMENT ON COLUMN products_hardware.package_contents IS '包装内容(JSON格式)';
COMMENT ON COLUMN products_hardware.optional_accessories IS '可选配件(JSON格式)';
COMMENT ON COLUMN products_hardware.cpu_threads IS 'CPU线程数';
