# ts-paginate

This is a typescript implementation of the most basic part of the ruby
[pagy](https://github.com/ddnexus/pagy) gem.

## usage

Install from npm using your preferred package manager, e.g., `npm`:

```shell
npm install --save @mfinelli/paginate
```

Then you can use it like so to calculate how to display a pagination component:

```typescript
import { paginate } from '@mfinelli/paginate';

// example total items and current page:
const items = 100;
const page = 2;
const perPage = 15;

const pages = Math.ceil(items / perPage);
const view = paginate(pages, page);
```

## license

```
The MIT License (MIT)

Copyright (c) 2024 Mario Finelli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
