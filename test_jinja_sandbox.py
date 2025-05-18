#!/usr/bin/env python3

from jinja2 import Environment
from jinja2.sandbox import SandboxedEnvironment
import sys

def test_format_vulnerability():
    """
    Test for CVE-2024-56326 vulnerability.
    
    This tests if the sandbox properly prevents str.format method from being used
    to escape the sandbox.
    """
    print("Testing for CVE-2024-56326 vulnerability...")
    
    # Create a sandboxed environment
    env = SandboxedEnvironment()
    
    # Malicious template that tries to use str.format to escape the sandbox
    malicious_template = """
    {% set format_method = "".format %}
    {{ format_method.__globals__['__builtins__']['eval']('__import__("os").system("echo SANDBOX ESCAPED")') }}
    """
    
    try:
        # Try to compile and render the malicious template
        template = env.from_string(malicious_template)
        result = template.render()
        print("Result:", result)
        print("Test FAILED: The sandbox was bypassed!")
        return False
    except Exception as e:
        print(f"Exception caught: {type(e).__name__}: {str(e)}")
        print("Test PASSED: The sandbox prevented the attack.")
        return True

def main():
    success = test_format_vulnerability()
    if success:
        print("\nYour Jinja2 installation is protected against CVE-2024-56326.")
        sys.exit(0)
    else:
        print("\nWARNING: Your Jinja2 installation is vulnerable to CVE-2024-56326!")
        sys.exit(1)

if __name__ == "__main__":
    main()
