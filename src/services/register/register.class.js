/* eslint-disable no-unused-vars */
exports.Register = class Register {
  constructor(options, app) {
    this.options = options || {};
    this.app = app || {};

  }

  async find(params) {
    return [];
  }

  async get(id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create(data, params) {
    try {
      const { users, company, candidate } = data;
      const createdUser = await this.app.service('users').create({
        email: users.email,
        password: users.password
      })
      console.log(createdUser)
      if (!users && (!company || !candidate)) {
        return { error: "error" }
      }
      if (data.company) {
        try {
          const createdCompany = await this.app.service('company').create({
            userId: createdUser.id,
            ...company
          })
          console.log(createdCompany)
          return { user: createdUser, company: createdCompany };
        } catch (error) {
          console.log(error)
          await this.app.service('users').remove(createdUser.id)
          return { error: "error" }
        }
      }
      if (data.candidate) {
        try {
          const createdCandidate = await this.app.service('candidate').create({
            userId: createdUser.id,
            ...candidate
          })
          console.log(createdCandidate)
          return { user: createdUser, candidate: createdCandidate };
        } catch (error) {
          console.log(error)
          await this.app.service('users').remove(createdUser.id)
          return { error: "error" }
        }
      }
    } catch (error) {
      console.log(error)
      return error;
    }


  }

  async update(id, data, params) {
    return data;
  }

  async patch(id, data, params) {
    return data;
  }

  async remove(id, params) {
    return { id };
  }
};
