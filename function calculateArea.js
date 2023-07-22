function calculateArea(length, width) {
    // Check if the input parameters are valid numbers
    if (typeof length !== 'number' || typeof width !== 'number' || length <= 0 || width <= 0) {
      throw new Error("Invalid input. Length and width must be positive numbers.");
    }
  
    // Calculate the area of the rectangle
    const area = length * width;
  
    // Return the calculated area
    return area;
  }
  