# 安全更新文档

## 2025-05-23 安全更新

### 1. 防御 PHPUnit 漏洞 (CVE-2017-9841)

检测到来自 IP 57.158.170.142 (新加坡 microsoft.com) 的攻击尝试，试图利用 PHPUnit 的 eval-stdin.php 漏洞。

攻击数据包:
```
POST /vendor/phpunit/phpunit/src/Util/PHP/eval-stdin.php HTTP/1.1
Host: 106.54.45.239:80
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:83.0) Gecko/20100101 Firefox/83.0
Content-Length: 52
Accept: */*
Accept-Language: en-US,en;q=0.5
Connection: close
Content-Type: application/x-www-form-urlencoded
Accept-Encoding: gzip
Connection: close

<?=md5('zpx27j6r');echo strtoupper(php_uname('s'))?>
```

### 2. 安全加固措施

#### Nginx 配置加固
- 添加了规则阻止对 `/vendor/phpunit/phpunit/src/Util/PHP/eval-stdin.php` 的访问
- 添加了规则阻止对任何 `/vendor/` 目录下的 PHP 文件的访问

#### ModSecurity 配置
- 将 ModSecurity 从 "DetectionOnly" 模式更改为 "On" 模式，使其能够主动阻止攻击
- 添加了自定义规则来检测和阻止 PHPUnit 漏洞攻击

#### CrowdSec 配置
- 添加了自定义规则来检测 PHPUnit 漏洞攻击尝试
- 将攻击 IP (57.158.170.142) 添加到黑名单，封禁时间为 168 小时（7 天）

#### 系统更新
- 更新了系统和软件包，确保所有安全补丁都已应用

### 3. 安全建议

1. **定期更新系统**：
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **监控安全日志**：
   ```bash
   sudo tail -f /var/log/nginx/error.log
   sudo tail -f /var/log/auth.log
   ```

3. **检查 CrowdSec 决策**：
   ```bash
   sudo cscli decisions list
   ```

4. **定期扫描漏洞**：
   ```bash
   sudo apt install -y lynis
   sudo lynis audit system
   ```

5. **保持 Web 应用程序更新**：确保 Web 应用程序和所有依赖项都是最新的。

6. **限制 PHP 文件访问**：Nginx 配置已经阻止了 PHP 文件的执行，这是一个很好的安全措施。

7. **使用强密码和 SSH 密钥**：确保所有账户都使用强密码，并考虑使用 SSH 密钥进行身份验证。

8. **定期备份**：定期备份数据和配置文件，以便在发生安全事件时能够快速恢复。
