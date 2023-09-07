# Use the official Amazon Linux base image
FROM amazonlinux

# Install required dependencies
RUN yum install -y gcc-c++ make
RUN yum install -y nodejs

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the working directory
COPY . .

# Expose the port on which your Express application will run
# EXPOSE 3000

# Start the Express application
CMD [ "npm", "run", "watch" ]