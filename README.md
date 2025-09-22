# CI-CD-Java
# 🚀 Dummy CI/CD Java Project

This is a **sample Java Maven project** that demonstrates how to set up a **CI/CD pipeline** with:

* **GitHub Actions** → for CI automation
* **SonarQube / SonarCloud** → for code quality & static analysis
* **Snyk** → for security vulnerability scanning

---

## 📦 Project Structure

```
dummy-ci-cd-java/
├── pom.xml                       # Maven build configuration
├── src
│   ├── main/java/com/example/App.java   # Main Java application
│   └── test/java/com/example/AppTest.java # JUnit test
```

---

## ⚙️ Technologies Used

* **Java 17**
* **Maven**
* **JUnit 4.13.2**
* **GitHub Actions**
* **SonarCloud**
* **Snyk**

---

## 🔄 CI/CD Workflow

The pipeline is defined in **`.github/workflows/ci-cd.yml`** and includes:

1. **Build & Test**

   * Compiles the project using Maven
   * Runs JUnit tests

2. **SonarQube / SonarCloud Scan**

   * Runs `mvn sonar:sonar`
   * Uploads code quality & security analysis results

3. **Snyk Security Scan**

   * Scans for vulnerabilities in dependencies
   * Fails if medium/high severity issues are found

---

## 🔑 Required GitHub Secrets

Go to your repo → **Settings → Secrets and variables → Actions** and add:

| Secret Name      | Value                         |
| ---------------- | ----------------------------- |
| `SONAR_TOKEN`    | Token from SonarCloud account |
| `SONAR_HOST_URL` | `https://sonarcloud.io`       |
| `SNYK_TOKEN`     | Token from Snyk account       |

---

## ▶️ Running the Pipeline

1. Push any code changes (e.g., update `App.java`).
2. Go to the **Actions tab** in GitHub.
3. Watch the pipeline run:

   * ✅ Build → compile & test
   * ✅ Sonar → code quality report
   * ✅ Snyk → vulnerability report

---

## 📊 Results

* **SonarCloud Dashboard** → Detailed code analysis (bugs, smells, coverage).
* **Snyk Reports** → Dependency security vulnerabilities.

---

## 🛠 Future Improvements

* Add Jacoco for **test coverage reports**.
* Add Docker build & push step.
* Add deployment (e.g., AWS / Kubernetes).
* Add notifications (Slack/MS Teams).

---



✅ With this setup, every code push is automatically **built, tested, analyzed, and security-checked** before deployment.
