export class Task {
  constructor(
    public id: string,
    public name: string,
    public done: boolean,
    public removed: boolean
  ) {}
}
