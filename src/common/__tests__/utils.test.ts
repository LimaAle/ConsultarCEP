import { formatCEP } from "../utils"

describe('utils',()=>{
  
  test('captalize name', () => {
    expect(formatCEP('04654000')).toBe("04654-000")
  })
  

})