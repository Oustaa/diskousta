interface Animal {
  bark?(): void;
  eat(): void;
  sleep(): void;
}

class Dog implements Animal {
  eat() {
    console.log("Dog is eating");
  }

  sleep() {
    console.log("Dog is sleeping");
  }
}
