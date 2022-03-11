export function minNumber(min: number) {
  return function decorator(target: any, name: string, index: number) {
    target.validators = {
      minNumber: function (args: any) {
        return args[index] >= min;
      },
    };
  };
}

export function validate(target: any, name: string, descriptor: PropertyDescriptor) {
  const originMethod = target[name];
  descriptor.value = function (...args: any[]) {
    if (target.validators) {
      Object.keys(target.validators).forEach((key) => {
        if (!target.validators[key](args)) {
          throw new Error('Not Valid!');
        }
      });
    }
    originMethod.apply(this, args);
  };
}
