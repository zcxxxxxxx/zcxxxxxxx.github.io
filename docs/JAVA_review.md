---
sidebar_position: 2
---

# 例子

1. Java标识符：

Java 标识符由字母、数字、美元符号($)和下划线(\_)构成，但不能以数字开头。
```java
int number1;    // 正确的标识符
String $name;   // 正确的标识符
// int 123abc;  // 错误的标识符，不能以数字开始
```

2. 封装、继承和多态：

```java
// 封装
public class Animal {
  private String name;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
}

// 继承
public class Dog extends Animal {
  public void bark() {
    System.out.println("Bark!");
  }
}

// 多态
Animal animal = new Dog();  // Dog 对象被当作 Animal 对象使用
animal.setName("Rover");  // 可以使用 Animal 类的方法
// animal.bark();  // 错误，因为 bark 方法不在 Animal 类中
```

3. 类的构造方法：

```java
public class Animal {
  private String name;

  public Animal(String name) {  // 构造函数
    this.name = name;
  }
}
```

4. 使用包：

```java
// 文件路径：com/myapp/Main.java
package com.myapp;

public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}
```

你可以通过 `import` 关键字导入并使用其他包中的类：

```java
import com.myapp.Main;  // 导入 Main 类

Main main = new Main();  // 使用 Main 类
```

5. 类型强制转换：

```java
double d = 3.14;
int i = (int) d;  // 将 d 强制转换为 int，i 的值现在是 3
```

6. 方法重载：

```java
public class Main {

  // 第一个 add 方法，接收两个 int 参数
  public int add(int a, int b) {
    return a + b;
  }

  // 第二个 add 方法，接收两个 double 参数
  public double add(double a, double b) {
    return a + b;
  }
}
```

1. 使用 `super` 关键字：

```java
public class Animal {
  public void eat() {
    System.out.println("Animal is eating...");
  }
}

public class Dog extends Animal {
  public void eat() {
    super.eat();  // 调用父类的 eat 方法
    System.out.println("Dog is eating...");
  }
}
```

8. 抽象类：

```java
public abstract class Animal {
  public abstract void sound();  // 抽象方法

  public void eat() {
    System.out.println("The animal eats...");
  }
}

public class Dog extends Animal {
  public void sound() {  // 必须实现父类的抽象方法
    System.out.println("The dog says: woof woof");
  }
}
```

9. 接口回调：

```java
public interface Callback {
  void callback(int param);
}

public class Client implements Callback {
  public void callback(int p) {
    System.out.println("callback called with " + p);
  }
}

public class Test {
  public static void main(String args[]) {
    Callback c = new Client();
    c.callback(42);
  }
}
```

10. JDBC 和事务处理：

```java
import java.sql.*;

public class JdbcTransactionExample {
  public static void main(String args[]) {
    Connection conn = null;
    Statement stmt = null;

    try {
      // 注册 JDBC 驱动
      Class.forName("com.mysql.jdbc.Driver");

      // 打开连接
      conn = DriverManager.getConnection("jdbc:mysql://localhost/EMP", "username", "password");

      // 关闭自动提交
      conn.setAutoCommit(false);
      System.out.println("Successfully connected...");

      // 执行操作
      stmt = conn.createStatement();
      String SQL = "INSERT INTO Employees (id, first, last, age) " +
                   "VALUES (100, 'Zia', 'Ali', 30)";
      stmt.executeUpdate(SQL);

      // 提交事务
      conn.commit();
      System.out.println("Inserted records into the table...");

    } catch (Exception e) {
      // 处理错误
      e.printStackTrace();

      // 如果发生错误，回滚事务
      try {
        if (conn != null) {
          conn.rollback();
        }
      } catch (SQLException se2) {
        se2.printStackTrace();
      }
    } finally {
      // 最后，关闭资源
      try {
        if (stmt != null) {
          stmt.close();
        }
      } catch (SQLException se2) {
      }
      try {
        if (conn != null) {
          conn.close();
        }
      } catch (SQLException se) {
        se.printStackTrace();
      }
    }
  }
}
```

请注意，这是一个简化的例子，用于演示 JDBC 和事务处理。在实际的生产环境中，您需要进行适当的错误处理，并且可能需要使用连接池、预处理语句等技术。

希望这些例子有助于您理解这些概念。如果您对任何概念有任何疑问，或者需要进一步的例子，请告诉我。