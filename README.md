Project example for @Param decorator not working when TypeOrmModule is imported into modules.

**To test**
1. `npm i`
2. `npm run start:dev`
3. In browser, navigate to `http://localhost:3000/broken-controller/test`
   1. There will be no output here
4. Comment out the TypeOrmModule import in `app.module.ts`
5. Comment out the TypeOrmModule import in `typeorm.module.ts`
6. In browser, navigate to `http://localhost:3000/broken-controller/test`
   1. There will be output